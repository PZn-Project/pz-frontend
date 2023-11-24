import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import { SignUpForm } from '@Containers/Auth'

export const SignUpPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <SignUpForm />
    </WidePageLayout>
  )
}
