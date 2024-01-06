import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import { AddClubForm } from '@Containers/Club'

export const AddClubPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <AddClubForm />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
