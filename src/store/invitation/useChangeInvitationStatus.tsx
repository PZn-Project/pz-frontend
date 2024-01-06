import axios, { AxiosError } from 'axios'
import { useSnackbar } from 'notistack'
import { UseMutateFunction, useMutation } from '@tanstack/react-query'

import { ErrorMessage, Nullable, SuccesMessage } from '@Utils/types'
import { extractErrorMessages } from '@Utils/functions'
import { InvitationStatus } from '@Store/types'

type ChangeInvitationStatusBody = {
  id: string
  status: InvitationStatus
  token: string
}

type UseChangeInvitationStatus = {
  isPending: boolean
  changeInvitationStatusMutation: UseMutateFunction<
    SuccesMessage,
    AxiosError<ErrorMessage>,
    ChangeInvitationStatusBody,
    unknown
  >
  error: Nullable<AxiosError<ErrorMessage>>
}

export function useChangeInvitationStatus(): UseChangeInvitationStatus {
  const { enqueueSnackbar } = useSnackbar()

  const {
    mutate: changeInvitationStatusMutation,
    isPending,
    error,
  } = useMutation<
    SuccesMessage,
    AxiosError<ErrorMessage>,
    ChangeInvitationStatusBody,
    unknown
  >({
    mutationFn: (body) => changeInvitationStatus(body),
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

  return { changeInvitationStatusMutation, isPending, error }
}

async function changeInvitationStatus(
  body: ChangeInvitationStatusBody,
): Promise<SuccesMessage> {
  // const { data } = await axios.patch<SuccesMessage>(
  //   `${process.env.API_URL}/invitations/${body.id}`,
  //   body.status,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${body.token}`,
  //     },
  //   },
  // )
  // console.log(data)
  console.log(body)

  return {
    statusCode: 200,
    message:
      body.status === InvitationStatus.ACCEPTED
        ? 'Prośba o dołączenie do klubu została zaakceptowania.'
        : 'Prośba o dołączenie do klubu została odrzucona.',
    error: false,
  }
}
