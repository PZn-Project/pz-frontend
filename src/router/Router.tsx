import { type ReactElement } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import Layout from '@Layout/Layout'
import HomePage from '@Pages/Home/HomePage'
import {
  ProfilePage,
  SignInPage,
  SignUpPage,
  RecoveryPage,
  ResetPasswordPage,
  ActivationPage,
  LogoutPage,
} from '@Pages/Auth'
import { AddClubPage } from '@Pages/Club'
import { NotFoundPage } from '@Pages/Error'

import { ROUTES } from './routes'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.SEARCH} element={<ProfilePage />} />
        <Route path={ROUTES.TEAMS} element={<ProfilePage />} />
        <Route path={ROUTES.GAMES} element={<ProfilePage />} />
        <Route path={ROUTES.INVITATIONS} element={<ProfilePage />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={ROUTES.CLUB_ADD} element={<AddClubPage />} />
        <Route path={ROUTES.CLUBS} element={<div></div>} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.RECOVERY} element={<RecoveryPage />} />
        <Route path={ROUTES.RESET} element={<ResetPasswordPage />} />
        <Route path={ROUTES.ACTIVATE} element={<ActivationPage />} />
        <Route path={ROUTES.LOGOUT} element={<LogoutPage />} />
      </Route>
    </Route>,
  ),
)

const Router = (): ReactElement => {
  return <RouterProvider router={ROUTER} />
}

export default Router
