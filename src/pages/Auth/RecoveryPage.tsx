import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import CenteredContentLayout from '@Layout/Content/CenteredContentLayout'
import { RecoveryForm } from '@Containers/Auth'

export const RecoveryPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <CenteredContentLayout>
        <RecoveryForm />
      </CenteredContentLayout>
    </WidePageLayout>
  )
}
