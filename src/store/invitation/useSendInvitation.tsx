import axios, { AxiosError } from 'axios'
import { useSnackbar } from 'notistack'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'

import { ErrorMessage, Nullable, SuccesMessage } from '@Utils/types'
import { extractErrorMessages } from '@Utils/functions'

type SendInvitationBody = {
  clubId: string
  token: string
}

type UseSendInvitation = {
  isPending: boolean
  sendInvitationMutation: UseMutateFunction<
    SuccesMessage,
    AxiosError<ErrorMessage>,
    SendInvitationBody,
    unknown
  >
  error: Nullable<AxiosError<ErrorMessage>>
}

export function useSendInvitation(): UseSendInvitation {
  const { enqueueSnackbar } = useSnackbar()

  const {
    mutate: sendInvitationMutation,
    isPending,
    error,
  } = useMutation<
    SuccesMessage,
    AxiosError<ErrorMessage>,
    SendInvitationBody,
    unknown
  >({
    mutationFn: (body) => createInvitation(body),
    onSuccess: (data) => {
      enqueueSnackbar({
        message: data.message,
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

  return { sendInvitationMutation, isPending, error }
}

async function createInvitation(
  body: SendInvitationBody,
): Promise<SuccesMessage> {
  // const { data } = await axios.post<SuccesMessage>(
  //   `${process.env.API_URL}/invitations`,
  //   body.clubId,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${body.token}`,
  //     },
  //   },
  // )
  //console.log(data)
  console.log(body)

  return {
    statusCode: 200,
    message: 'Prośba o dołączenie do klubu została wysłana.',
    error: false,
  }
}
