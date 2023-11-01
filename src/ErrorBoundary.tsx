import React, { ReactNode } from 'react'
import ErrorPage from './pages/Error'

interface IProps {
  children: ReactNode | ReactNode[]
}

interface IState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />
    }

    return this.props.children
  }
}

export default ErrorBoundary
