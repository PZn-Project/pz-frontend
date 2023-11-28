import type { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useUser } from '@Store/auth'
import { ROUTES } from './routes'

const PublicRoute = (): ReactElement => {
  const { authData } = useUser()

  if (authData) {
    return <Navigate to={ROUTES.HOME} />
  }

  return <Outlet />
}

export default PublicRoute
