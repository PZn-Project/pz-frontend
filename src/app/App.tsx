import { type ReactElement } from 'react'
import Router from './Router'
import ErrorBoundary from './ErrorBoundary'
import { ErrorPage } from '@Pages/Error'

const App = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Router />
    </ErrorBoundary>
  )
}
export default App
