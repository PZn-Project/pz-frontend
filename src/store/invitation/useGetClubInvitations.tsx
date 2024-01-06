import { useQuery } from '@tanstack/react-query'
//import axios from 'axios'

import { Nullable } from '@Utils/types'

import { QUERY_KEY } from '../constants'
import { ClubInvitation, InvitationStatus } from '../types'

type InvitationsData = {
  statusCode: number
  message: string
  error: null
  data: ClubInvitation[]
}

type UseGetClubInvitations = {
  invitationsData: Nullable<InvitationsData>
  error: Error | null
  isLoading: boolean
}

export function useGetClubInvitations(
  token: string,
  clubId: string,
): UseGetClubInvitations {
  const {
    data: invitationsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: [QUERY_KEY.CLUB_INVITATIONS, clubId],
    queryFn: async (): Promise<InvitationsData> =>
      getClubInvitations(token, clubId),
    initialData: null,
  })

  return {
    invitationsData,
    error,
    isLoading,
  }
}

export async function getClubInvitations(
  token: string,
  clubId: string,
): Promise<InvitationsData> {
  // const { data } = await axios.get<InvitationsData>(
  //   `${process.env.API_URL}/invitations/${clubId}`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   },
  // )
  //console.log(data)
  console.log(token, clubId)

  return {
    statusCode: 200,
    message: 'Ok.',
    error: null,
    data: [
      {
        id: 'sadsad123asd13sadv21asd3123',
        username: 'Janusz Kot',
        image:
          'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2024-02-03T21:43:10.000Z',
        status: InvitationStatus.REJECTED,
      },
      {
        id: 'sads1ad12asd3213sa2dv2131ad23',
        username: 'Bogdan Nowak',
        image:
          'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd1eXxlbnwwfHwwfHx8MA%3D%3D',
        createdAt: '2024-02-02T12:27:11.000Z',
        status: InvitationStatus.PENDING,
      },
      {
        id: 'sad23sad1asd23ad213sadv2131asd23',
        username: 'Roman Kowal',
        image:
          'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2024-01-28T17:11:43.000Z',
        status: InvitationStatus.PENDING,
      },
    ],
  }
}
