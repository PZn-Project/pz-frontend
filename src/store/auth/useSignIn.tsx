import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { extractErrorMessages } from '@Utils/functions'

import axios, { AxiosError } from 'axios'
import { ErrorMessage } from '@Utils/types'

import { AuthData } from '@Store/types'
import { QUERY_KEY } from '@Store/constants'
import { ROUTES } from '@Router/routes'

import * as userDataStorage from './utils/userDataStorage'

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
      navigate(ROUTES.SEARCH)
      enqueueSnackbar({
        message: 'Pomyślnie zalogowano.',
        variant: 'success',
      })
    },
    onError: (error) => {
      enqueueSnackbar({
        message: extractErrorMessages(error),
        variant: 'error',
      })
    },
  })

  return { signInMutation, isPending }
}

const signIn = async (body: SignInBody): Promise<AuthData> => {
  const response = await axios.post<AuthData>(
    `${process.env.API_URL}/auth/login`,
    body,
  )

  console.log(response)

  return {
    id: 'wq21DSA321sacsaf122da12cfv112',
    username: 'user',
    email: 'user@mail.com',
    type: 'Barere',
    roles: ['User'],
    token: 'asds21321adsad1321szxacsa123asd',
    image:
      'https://plus.unsplash.com/premium_photo-1675129779582-d84b954f2397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expirationDate: '2024-02-28T00:00:00.000Z',
  }
}
