import { type ReactElement } from 'react'

import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import { UserInvitationList } from '@Containers/Invitations'

export const UserInvitationPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <UserInvitationList />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
