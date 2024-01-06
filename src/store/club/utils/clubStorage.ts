import secureLocalStorage from 'react-secure-storage'
import { LOCAL_STORAGE_KEY } from '@Utils/constant'
import { v4 as uuid } from 'uuid'
import { ClubData } from '@Store/types'
import { reject } from 'ramda'

export function addClub(clubData: Omit<ClubData, 'id'>): void {
  const clubs: ClubData[] =
    (secureLocalStorage.getItem(LOCAL_STORAGE_KEY.CLUBS) as ClubData[]) || []
  clubs.push({
    id: uuid(),
    ...clubData,
  })

  secureLocalStorage.setItem(LOCAL_STORAGE_KEY.CLUBS, clubs)
}

export function getClubs(): ClubData[] {
  return secureLocalStorage.getItem(LOCAL_STORAGE_KEY.CLUBS) as ClubData[]
}

export function removeClub(id: string): void {
  const clubs: ClubData[] =
    (secureLocalStorage.getItem(LOCAL_STORAGE_KEY.CLUBS) as ClubData[]) || []
  const newClubs = reject<ClubData, ClubData[]>((item) => item.id === id, clubs)
  secureLocalStorage.setItem(LOCAL_STORAGE_KEY.CLUBS, newClubs)
}
