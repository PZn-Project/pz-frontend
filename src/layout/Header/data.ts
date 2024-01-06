import { ROUTES } from '@Router/routes'

export const NAVIGATION_DATA = {
  Public: [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Zaloguj', path: ROUTES.SIGN_IN },
  ],
  Auth: [
    { label: 'Szukaj', path: ROUTES.SEARCH },
    { label: 'Zespoły', path: ROUTES.TEAMS },
    { label: 'Mecze', path: ROUTES.GAMES },
    { label: 'Zaproszenia', path: ROUTES.INVITATIONS },
    { label: 'Profil', path: ROUTES.PROFILE },
  ],
}
