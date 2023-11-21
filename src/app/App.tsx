import { type ReactElement } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { ErrorPage } from '@Pages/Error'
import Router from '@Router/Router'

const App = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Router />
    </ErrorBoundary>
  )
}
export default App
