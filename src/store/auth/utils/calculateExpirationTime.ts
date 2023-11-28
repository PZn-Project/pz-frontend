import { AuthData } from '@Store/types'


export function calculateExpirationTime(authData: AuthData): number {
  const now = new Date().getTime()
  const expirationDate = new Date(authData.expirationDate).getTime()
  return expirationDate - now
}
