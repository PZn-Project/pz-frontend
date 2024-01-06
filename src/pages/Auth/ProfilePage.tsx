import { type ReactElement } from 'react'

import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'

import { UserProfile } from '@Containers/Auth'
import BlankPageLayout from '@Layout/Page/BlankPageLayout'

export const ProfilePage = (): ReactElement => {
  return (
    <BlankPageLayout>
      <CenteredContentLayout>
        <UserProfile />
      </CenteredContentLayout>
    </BlankPageLayout>
  )
}
