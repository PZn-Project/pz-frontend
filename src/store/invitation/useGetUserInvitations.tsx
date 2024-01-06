import { useQuery } from '@tanstack/react-query'
//import axios from 'axios'

import { Nullable } from '@Utils/types'

import { QUERY_KEY } from '../constants'
import { UserInvitation, InvitationStatus } from '../types'

type InvitationsData = {
  statusCode: number
  message: string
  error: null
  data: UserInvitation[]
}

type UseGetUserInvitations = {
  invitationsData: Nullable<InvitationsData>
  error: Error | null
  isLoading: boolean
}

export function useGetUserInvitations(token: string): UseGetUserInvitations {
  const {
    data: invitationsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: [QUERY_KEY.USER_INVITATIONS],
    queryFn: async (): Promise<InvitationsData> => getUserInvitations(token),
    initialData: null,
  })

  return {
    invitationsData,
    error,
    isLoading,
  }
}

export async function getUserInvitations(
  token: string,
): Promise<InvitationsData> {
  // const { data } = await axios.get<InvitationsData>(
  //   `${process.env.API_URL}/invitations`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   },
  // )
  // console.log(data)
  console.log(token)

  Promise.resolve()
  return {
    statusCode: 200,
    message: 'Ok.',
    error: null,
    data: [
      {
        id: 'sadsad1221a3acs3213sadv2131a23',
        name: 'KS Wrzosowa',
        sport: 'handball',
        city: 'Wrzosowa',
        logoUrl:
          'https://images.unsplash.com/photo-1584196825674-e6f64590b914?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2024-02-03T21:43:10.000Z',
        status: InvitationStatus.REJECTED,
      },
      {
        id: 'sadsad12asd32213sadv213sa123',
        name: 'KS Wieliczka',
        sport: 'soccer',
        city: 'Wieliczka',
        logoUrl:
          'https://images.unsplash.com/photo-1628891890377-57dba2715caf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2024-02-02T12:27:11.000Z',
        status: InvitationStatus.PENDING,
      },
      {
        id: 'sads1ad1232113sawdv2131c23',
        name: 'LKS Borek',
        sport: 'soccer',
        city: 'Borek',
        logoUrl:
          'https://images.unsplash.com/photo-1598881034666-6d3443d4b1bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2024-01-28T17:11:43.000Z',
        status: InvitationStatus.PENDING,
      },
    ],
  }
}
