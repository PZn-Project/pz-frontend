import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import { AccountActivation } from '@Containers/Auth'

export const ActivationPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <AccountActivation />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
