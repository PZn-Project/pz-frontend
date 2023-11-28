import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { Nullable, Nullish } from '@Utils/types'
import { ROUTES } from '@Router/routes'
import { QUERY_KEY } from '@Store/constants'
import { AuthData } from '@Store/types'
import { calculateExpirationTime } from './utils/calculateExpirationTime'
import * as userDataStorage from './utils/userDataStorage'

type UseAuth = {
  authData: Nullable<AuthData>
  error: Nullable<Error>
  isLoading: boolean
}

export const useAuth = (): UseAuth => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    data: authData,
    error,
    isLoading,
  } = useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: async (): Promise<Nullable<AuthData>> => getUser(authData),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    placeholderData: userDataStorage.getUser(),
  })

  useEffect(() => {
    if (authData) {
      userDataStorage.saveUser(authData)
      const expiresIn = calculateExpirationTime(authData)
      const timeout = setTimeout(() => {
        queryClient.setQueryData([QUERY_KEY.USER], null)
        navigate(ROUTES.SIGN_IN)
      }, expiresIn)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [authData, navigate, queryClient])

  return {
    authData: authData ?? null,
    error,
    isLoading,
  }
}

export const getUser = async (
  authData: Nullish<AuthData>,
): Promise<Nullable<AuthData>> => {
  if (!authData) {
    return null
  }

  const { data } = await axios.get(`${process.env.API_URL}/auth/whoami`, {
    headers: {
      Authorization: `Bearer ${authData.token}`,
    },
  })

  return data
}
