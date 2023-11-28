import type { IconType } from 'react-icons'
import { FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

type SignInFields = {
  id: string
  name: 'email' | 'password'
  type: string
  placeholder: string
  required: boolean
  Icon: IconType
}

export const SIGN_IN_FIELDS: SignInFields[] = [
  {
    id: '1',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
    Icon: MdEmail,
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
