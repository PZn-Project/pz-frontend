import { type ReactElement } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import Layout from '@Layout/Layout'
import HomePage from '@Pages/Home/HomePage'
import { SignInPage, SignUpPage } from '@Pages/Auth'
import { NotFoundPage } from '@Pages/Error'
import { ROUTES } from './config'

const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
    </Route>,
  ),
)

const Router = (): ReactElement => {
  return <RouterProvider router={ROUTER} />
}

export default Router
