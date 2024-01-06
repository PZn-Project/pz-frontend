import { useNavigate } from 'react-router-dom'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useSnackbar } from 'notistack'

import { addClub as addClubStorage } from '@Store/club/utils/clubStorage'

import {
  ValidationError,
  SuccesMessage,
  ErrorMessage,
  Nullable,
} from '@Utils/types'
import { ROUTES } from '@Router/routes'

export type AddClubBody = {
  name: string
  sport: string
  description: string
  logoUrl: string
  province: string
  city: string
  street: string
  addressNumber: string
  members: string[]
}

export type AddClubError = ValidationError<{
  name?: string
}>

type UseAddClub = {
  isPending: boolean
  addClubMutation: UseMutateFunction<
    SuccesMessage,
    AxiosError<AddClubError | ErrorMessage>,
    AddClubBody,
    unknown
  >
  error: Nullable<AxiosError<AddClubError | ErrorMessage>>
}

export const useAddClub = (): UseAddClub => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const {
    mutate: addClubMutation,
    isPending,
    error,
  } = useMutation<
    SuccesMessage,
    AxiosError<AddClubError | ErrorMessage>,
    AddClubBody,
    unknown
  >({
    mutationFn: (body) => addClub(body),
    onSuccess: () => {
      navigate(ROUTES.CLUBS)
    },
    onError: (error) => {
      enqueueSnackbar(error)
    },
  })

  return { addClubMutation, isPending, error }
}

const addClub = async (body: AddClubBody): Promise<SuccesMessage> => {
  addClubStorage(body)

  return {
    statusCode: 200,
    error: false,
    message: 'Klub został dodany pomyślnie',
  }
  // const { data } = await axios.post<SuccesMessage>(
  //   `${process.env.API_URL}/api/teams/create`,
  //   body,
  // )

  // return data
}
