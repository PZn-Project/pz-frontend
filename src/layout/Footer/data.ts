import { ROUTES } from '@Router/routes'
import {
  FaFacebook,
  FaInstagramSquare,
  FaDiscord,
  FaYoutube,
} from 'react-icons/fa'

export const NAVIGATION_DATA = {
  Public: [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Zaloguj', path: ROUTES.SIGN_IN },
  ],
  Auth: [
    { label: 'Szukaj', path: ROUTES.SEARCH },
    { label: 'Zespoły', path: ROUTES.TEAMS },
    { label: 'Mecze', path: ROUTES.GAMES },
    { label: 'Profil', path: ROUTES.PROFILE },
  ],
}

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
