import { useQuery } from '@tanstack/react-query'
import { Nullable } from '@Utils/types'

import * as userDataStorage from './utils/userDataStorage'
import { getUser } from './useAuth'
import { AuthData } from '@Store/types'
import { QUERY_KEY } from '@Store/constants'

type UseUser = {
  authData: Nullable<AuthData>
}

export function useUser(): UseUser {
  const storedUser = userDataStorage.getUser()

  const { data: authData } = useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: async (): Promise<Nullable<AuthData>> => getUser(storedUser),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  return {
    authData: authData ?? null,
  }
}
