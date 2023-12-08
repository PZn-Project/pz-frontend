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
import { ROUTES } from '@Router/routes'

export type RecoveryBody = {
  email: string
}

export type RecoveryError = ValidationError<{
  email?: string
}>

type UseRecovery = {
  isPending: boolean
  recoveryMutation: UseMutateFunction<
    SuccesMessage,
    AxiosError<RecoveryError | ErrorMessage>,
    RecoveryBody,
    unknown
  >
  error: Nullable<AxiosError<RecoveryError | ErrorMessage>>
}

export const useRecovery = (): UseRecovery => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const {
    mutate: recoveryMutation,
    isPending,
    error,
  } = useMutation<
    SuccesMessage,
    AxiosError<RecoveryError | ErrorMessage>,
    RecoveryBody,
    unknown
  >({
    mutationFn: (body) => recovery(body),
    onSuccess: () => {
      navigate(ROUTES.SIGN_IN)
    },
    onError: (error) => {
      enqueueSnackbar(error)
    },
  })

  return { recoveryMutation, isPending, error }
}

const recovery = async (body: RecoveryBody): Promise<SuccesMessage> => {
  const { data } = await axios.post<SuccesMessage>(
    `${process.env.API_URL}/auth/recovery`,
    body,
  )
  console.log(data)

  return data
}
