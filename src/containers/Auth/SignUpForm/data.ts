import type { IconType } from 'react-icons'
import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

type SignUpFields = {
  id: string
  name: 'username' | 'email' | 'password' | 'confirmPassword'
  type: string
  placeholder: string
  required: boolean
  Icon: IconType
}

export const SIGN_UP_FIELDS: SignUpFields[] = [
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
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
    Icon: MdEmail,
  },
  {
    id: '3',
    name: 'password',
    type: 'password',
    placeholder: 'Hasło',
    required: true,
    Icon: FaLock,
  },
  {
    id: '4',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Potwierdź Hasło',
    required: true,
    Icon: FaLock,
  },
]
