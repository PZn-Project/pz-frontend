import { type ReactElement } from 'react'

import WidePageLayout from '@Layout/Page/WidePageLayout'
import { SignInForm } from '@Containers/Auth'

export const SignInPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <SignInForm />
    </WidePageLayout>
  )
}
