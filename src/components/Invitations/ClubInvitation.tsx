import { ReactElement } from 'react'
import { BaseImage, SolidButton } from '@Components/Shared'
import {
  ClubInvitation as ClubInvitationType,
  InvitationStatus,
} from '@Store/types'
import { useUser } from '@Store/auth'
import { useChangeInvitationStatus } from '@Store/invitation'
import { FaUser, FaCalendarAlt } from 'react-icons/fa'

import styles from './ClubInvitatio.module.scss'
import { INVITATION_STATUS } from '@Utils/constant'
import { formatDate } from '@Utils/functions'

export function ClubInvitation({
  id,
  username,
  image,
  createdAt,
  status,
}: ClubInvitationType): ReactElement {
  const { authData } = useUser()
  const { changeInvitationStatusMutation } = useChangeInvitationStatus()

  const token = (authData && authData.token) || ''

  return (
    <article className={styles.container}>
      <BaseImage
        width="80px"
        height="80px"
        alt={`${username} avatar`}
        src={image}
        isCircle
      />
      <h3 className={styles.paragraph}>
        <FaUser />
        {username}
      </h3>
      <p className={styles.paragraph}>
        <FaCalendarAlt />
        {formatDate(createdAt, 'Y-M-D')}
      </p>
      <p className={styles.paragraph}>{INVITATION_STATUS[status]}</p>
      {status === InvitationStatus.PENDING ? (
        <div className={styles.buttons}>
          <SolidButton
            size="medium"
            color="primary"
            onClick={() =>
              changeInvitationStatusMutation({
                token,
                status: InvitationStatus.ACCEPTED,
                id,
              })
            }
          >
            Zaakceptuj
          </SolidButton>
          <SolidButton
            size="medium"
            color="red"
            onClick={() =>
              changeInvitationStatusMutation({
                token,
                status: InvitationStatus.REJECTED,
                id,
              })
            }
          >
            Odmów
          </SolidButton>
        </div>
      ) : (
        <div className={styles.placeholder} />
      )}
    </article>
  )
}
