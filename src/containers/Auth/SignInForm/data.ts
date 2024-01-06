import type { IconType } from 'react-icons'
import { FaLock, FaUser } from 'react-icons/fa'

type SignInFields = {
  id: string
  name: 'username' | 'password'
  type: string
  placeholder: string
  required: boolean
  Icon: IconType
}

export const SIGN_IN_FIELDS: SignInFields[] = [
  {
    id: '1',
    name: 'username',
    type: 'text',
    placeholder: 'Nazwa użytkownika',
    required: true,
    Icon: FaUser,
  },
  {
    id: '2',
    name: 'password',
    type: 'password',
    placeholder: 'Hasło',
    required: true,
    Icon: FaLock,
  },
]
