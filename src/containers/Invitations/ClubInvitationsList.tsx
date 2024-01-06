import { ReactElement } from 'react'
import { isNil } from 'ramda'
import { FaEnvelope } from 'react-icons/fa'

import { Nullable } from '@Utils/types'
import { ClubInvitation } from '@Components/Invitations'
import { useGetClubInvitations } from '@Store/invitation'
import { LoadingSpinner } from '@Components/Shared'
import { useUser } from '@Store/auth'
import styles from './InvitationList.module.scss'


type ClubInvitationListProps = {
  clubId: string
}

export function ClubInvitationList({
  clubId,
}: ClubInvitationListProps): Nullable<ReactElement> {
  const { authData } = useUser()
  const token = (authData && authData.token) || ''
  const { invitationsData, isLoading } = useGetClubInvitations(token, clubId)

  if (isLoading) {
    return <LoadingSpinner />
  }

  return isNil(invitationsData) ? null : (
    <section className={styles.section}>
      <h2>
        <FaEnvelope />
        Zaproszenia
      </h2>
      <hr />
      <ul className={styles.container}>
        {invitationsData.data.map((invitation) => (
          <ClubInvitation key={invitation.id} {...invitation} />
        ))}
      </ul>
    </section>
  )
}
