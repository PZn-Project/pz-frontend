import secureLocalStorage from 'react-secure-storage'
import { LOCAL_STORAGE_KEY } from '@Utils/constant'
import { Nullable } from '@Utils/types'
import { AuthData } from '@Store/types'
import { calculateExpirationTime } from './calculateExpirationTime'

export function saveUser(authData: AuthData): void {
  secureLocalStorage.setItem(LOCAL_STORAGE_KEY.AUTH_DATA, authData)
}

export function getUser(): Nullable<AuthData> {
  const authData = secureLocalStorage.getItem(
    LOCAL_STORAGE_KEY.AUTH_DATA,
  ) as Nullable<AuthData>

  if (authData) {
    const remainingTime = calculateExpirationTime(authData)
    if (remainingTime <= 600000) {
      removeUser()
      return null
    }
    return authData
  }
  return null
}

export function removeUser(): void {
  secureLocalStorage.removeItem(LOCAL_STORAGE_KEY.AUTH_DATA)
}
