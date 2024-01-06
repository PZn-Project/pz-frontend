import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import { Logout } from '@Containers/Auth'

export const LogoutPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <Logout />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
