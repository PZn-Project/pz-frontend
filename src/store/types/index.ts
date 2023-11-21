export type User = {
  data: {
    id: string
    username: string
    email: string
    isActive: boolean
    name: string
    surname: string
    avatar: string
    createdAt: string
    updatedAt: string
  }
  token: string
  expirationDate: string
}
