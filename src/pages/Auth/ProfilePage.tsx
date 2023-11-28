import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'

export const ProfilePage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <h2>User Profile</h2>
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
