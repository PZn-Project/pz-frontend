import { useQuery } from '@tanstack/react-query'
import { Nullable } from '@Utils/types'

import { getUser } from './useAuth'
import { AuthData } from '@Store/types'
import { QUERY_KEY } from '@Store/constants'

type UseUser = {
  authData: Nullable<AuthData>
}

export const useUser = (): UseUser => {
  const { data: authData } = useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: async (): Promise<Nullable<AuthData>> => getUser(authData),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return {
    authData: authData ?? null,
  }
}
