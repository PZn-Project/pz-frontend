import type { IconType } from 'react-icons'
import { FaLock } from 'react-icons/fa'

type ResetPasswordField = {
  id: string
  name: 'password' | 'confirmPassword'
  type: string
  placeholder: string
  required: boolean
  Icon: IconType
}

export const RESET_PASSWORD_FIELDS: ResetPasswordField[] = [
  {
    id: '1',
    name: 'password',
    type: 'password',
    placeholder: 'Nowe Hasło',
    required: true,
    Icon: FaLock,
  },
  {
    id: '2',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Potwierdź Hasło',
    required: true,
    Icon: FaLock,
  },
]
