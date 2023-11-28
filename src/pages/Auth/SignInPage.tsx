import { type ReactElement } from 'react'

import WidePageLayout from '@Layout/Page/WidePageLayout'
import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import { SignInForm } from '@Containers/Auth'


export const SignInPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <SignInForm />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
