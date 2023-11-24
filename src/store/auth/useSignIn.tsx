import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import * as userDataStorage from './utils/userDataStorage'
import axios, { AxiosError } from 'axios'
import { ErrorMessage } from '@Utils/types'
import { AuthData } from '@Store/types'
import { QUERY_KEY } from '@Store/constants'
import { ROUTES } from '@Router/routes'

export type SignInBody = {
  email: string
  password: string
}

type UseSignIn = {
  isPending: boolean
  signInMutation: UseMutateFunction<
    AuthData,
    AxiosError<ErrorMessage>,
    SignInBody,
    unknown
  >
}

export function useSignIn(): UseSignIn {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: signInMutation, isPending } = useMutation<
    AuthData,
    AxiosError<ErrorMessage>,
    SignInBody,
    unknown
  >({
    mutationFn: (body) => signIn(body),
    onSuccess: (data) => {
      userDataStorage.saveUser(data)
      queryClient.setQueryData([QUERY_KEY.USER], data)
      navigate(ROUTES.HOME)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return { signInMutation, isPending }
}

async function signIn(body: SignInBody): Promise<AuthData> {
  const { data } = await axios.post<AuthData>(
    `${process.env.API_URL}/auth/signin`,
    body,
  )

  return data
}
