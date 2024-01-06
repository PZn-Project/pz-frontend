import { type ReactElement } from 'react'
import { useParams } from 'react-router-dom'

import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import { ClubInvitationList } from '@Containers/Invitations'

export const ClubInvitationPage = (): ReactElement => {
  const { clubId } = useParams()

  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <ClubInvitationList clubId={clubId || ''} />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
