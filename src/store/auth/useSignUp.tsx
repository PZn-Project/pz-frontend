import { useNavigate } from 'react-router-dom'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useSnackbar } from 'notistack'

import {
  ValidationError,
  SuccesMessage,
  ErrorMessage,
  Nullable,
} from '@Utils/types'
import { extractErrorMessages } from '@Utils/functions'
import { ROUTES } from '@Router/routes'

export type SignUpBody = {
  username: string
  email: string
  password: string
}

export type SignUpError = ValidationError<{
  username?: string
  email?: string
  password?: string
}>

type UseSignUp = {
  isPending: boolean
  signUpMutation: UseMutateFunction<
    SuccesMessage,
    AxiosError<SignUpError | ErrorMessage>,
    SignUpBody,
    unknown
  >
  error: Nullable<AxiosError<SignUpError | ErrorMessage>>
}

export const useSignUp = (): UseSignUp => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const {
    mutate: signUpMutation,
    isPending,
    error,
  } = useMutation<
    SuccesMessage,
    AxiosError<SignUpError | ErrorMessage>,
    SignUpBody,
    unknown
  >({
    mutationFn: (body) => signUp(body),
    onSuccess: (data) => {
      enqueueSnackbar({
        message: data.message,
        variant: 'success',
      })
      navigate(ROUTES.SIGN_IN)
    },
    onError: (error) => {
      enqueueSnackbar({
        message: extractErrorMessages(error),
        variant: 'error',
      })
    },
  })

  return { signUpMutation, isPending, error }
}

const signUp = async (body: SignUpBody): Promise<SuccesMessage> => {
  const { data } = await axios.post<SuccesMessage>(
    `${process.env.API_URL}/auth/register`,
    body,
  )
  console.log(data)

  return data
}
