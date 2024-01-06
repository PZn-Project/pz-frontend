import axios, { AxiosError } from 'axios'
import { useSnackbar } from 'notistack'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'

import { ErrorMessage, Nullable, SuccesMessage } from '@Utils/types'
import { extractErrorMessages } from '@Utils/functions'

type CancelInvitationBody = {
  id: string
  token: string
}

type UseCancelInvitation = {
  isPending: boolean
  cancelInvitationMutation: UseMutateFunction<
    SuccesMessage,
    AxiosError<ErrorMessage>,
    CancelInvitationBody,
    unknown
  >
  error: Nullable<AxiosError<ErrorMessage>>
}

export function useCancelInvitation(): UseCancelInvitation {
  const { enqueueSnackbar } = useSnackbar()

  const {
    mutate: cancelInvitationMutation,
    isPending,
    error,
  } = useMutation<
    SuccesMessage,
    AxiosError<ErrorMessage>,
    CancelInvitationBody,
    unknown
  >({
    mutationFn: (body) => deleteInvitation(body),
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

  return { cancelInvitationMutation, isPending, error }
}

async function deleteInvitation(
  body: CancelInvitationBody,
): Promise<SuccesMessage> {
  // const { data } = await axios.delete<SuccesMessage>(
  //   `${process.env.API_URL}/invitations/${body.id}`,
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
    message: 'Prośba o dołączenie do klubu została anulowana.',
    error: false,
  }
}
