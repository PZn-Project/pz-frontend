import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

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

export const useSignIn = (): UseSignIn => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

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
      enqueueSnackbar({
        message: error.message,
        variant: 'error',
      })
    },
  })

  return { signInMutation, isPending }
}

const signIn = async (body: SignInBody): Promise<AuthData> => {
  const { data } = await axios.post<AuthData>(
    `${process.env.API_URL}/auth/login`,
    body,
  )
  console.log(data)

  return data
}
