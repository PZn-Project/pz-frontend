import { ROUTES } from '@Router/routes'
import {
  FaFacebook,
  FaInstagramSquare,
  FaDiscord,
  FaYoutube,
} from 'react-icons/fa'

export const NAVIGATION_DATA = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Rejestracja', path: ROUTES.SIGN_UP },
]

export const MEDIA_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: FaFacebook },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    Icon: FaInstagramSquare,
  },
  { label: 'Discord', href: 'https://discord.com/', Icon: FaDiscord },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: FaYoutube },
]
