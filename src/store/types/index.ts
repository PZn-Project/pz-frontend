export type User = {
  id: string
  username: string
  email: string
  roles: string[]
  image: string
}

export type AuthData = User & {
  type: string
  token: string
  expirationDate: string
}

export type ClubData = {
  id: string
  name: string
  sport: string
  description: string
  logoUrl: string
  province: string
  city: string
  street: string
  addressNumber: string
  members: string[]
}

export type UserInvitation = {
  id: string
  name: string
  sport: string
  city: string
  logoUrl:string
  createdAt: string
  status: InvitationStatus
}

export type ClubInvitation = {
  id: string
  username: string
  image:string
  createdAt: string
  status: InvitationStatus
}


export enum InvitationStatus {
  REJECTED = 'REJECTED',
  ACCEPTED = 'ACCEPTED',
  PENDING = 'PENDING',
}
