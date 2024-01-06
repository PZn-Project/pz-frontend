import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'

import { ROUTES } from '@Router/routes'
import { QUERY_KEY } from '@Store/constants'
import * as userDataStorage from './utils/userDataStorage'

type UseSignOut = {
  signOutMutation: VoidFunction
}

export const useSignOut = (): UseSignOut => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const signOutMutation = useCallback(() => {
    userDataStorage.removeUser()
    queryClient.setQueryData([QUERY_KEY.USER], null)
    navigate(ROUTES.LOGOUT)
  }, [navigate, queryClient])

  return { signOutMutation }
}
