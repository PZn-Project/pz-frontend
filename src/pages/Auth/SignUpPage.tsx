import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import { SignUpForm } from '@Containers/Auth'

export const SignUpPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <SignUpForm />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
