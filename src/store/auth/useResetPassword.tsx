import { UseMutateFunction, useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useSnackbar } from 'notistack'

import {
  ValidationError,
  SuccesMessage,
  ErrorMessage,
  Nullable,
} from '@Utils/types'

export type ResetPasswordBody = {
  password: string
  token: string
}

export type ResetPasswordError = ValidationError<{
  password?: string
}>

type UseResetPassword = {
  isPending: boolean
  resetPasswordMutation: UseMutateFunction<
    SuccesMessage,
    AxiosError<ResetPasswordError | ErrorMessage>,
    ResetPasswordBody,
    unknown
  >
  error: Nullable<AxiosError<ResetPasswordError | ErrorMessage>>
}

export const useResetPassword = (): UseResetPassword => {
  const { enqueueSnackbar } = useSnackbar()

  const {
    mutate: resetPasswordMutation,
    isPending,
    error,
  } = useMutation<
    SuccesMessage,
    AxiosError<ResetPasswordError | ErrorMessage>,
    ResetPasswordBody,
    unknown
  >({
    mutationFn: (body) => recovery(body),
    onSuccess: (data) => {
      enqueueSnackbar(data.message)
    },
    onError: (error) => {
      enqueueSnackbar(error)
    },
  })

  return { resetPasswordMutation, isPending, error }
}

const recovery = async (body: ResetPasswordBody): Promise<SuccesMessage> => {
  const { data } = await axios.post<SuccesMessage>(
    `${process.env.API_URL}/auth/reset`,
    body,
  )
  console.log(data)

  return data
}
