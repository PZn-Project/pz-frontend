export type AuthData = {
  id: string
  username: string
  email: string
  type: string
  roles: string[]
  token: string
  image:string
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
