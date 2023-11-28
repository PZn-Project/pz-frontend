import type { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@Store/auth'
import { ROUTES } from './routes'

const ProtectedRoute = (): ReactElement => {
  const { authData } = useAuth()

  if (!authData) {
    return <Navigate to={ROUTES.SIGN_IN} />
  }

  return <Outlet />
}

export default ProtectedRoute
