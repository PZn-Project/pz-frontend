import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import { ResetPasswordForm } from '@Containers/Auth'

export const ResetPasswordPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <ResetPasswordForm />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
