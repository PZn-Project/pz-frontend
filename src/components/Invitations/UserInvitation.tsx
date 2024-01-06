import { ReactElement } from 'react'
import { FaFootballBall, FaCity, FaCalendarAlt } from 'react-icons/fa'

import { useUser } from '@Store/auth'
import { useCancelInvitation } from '@Store/invitation'
import {
  InvitationStatus,
  UserInvitation as UserInvitationType,
} from '@Store/types'
import { formatDate } from '@Utils/functions'
import { INVITATION_STATUS, SPORTS_NAMES } from '@Utils/constant'
import { BaseImage, SolidButton } from '@Components/Shared'

import styles from './UserInvitation.module.scss'

export function UserInvitation({
  id,
  name,
  sport,
  city,
  logoUrl,
  createdAt,
  status,
}: UserInvitationType): ReactElement {
  const { authData } = useUser()
  const { cancelInvitationMutation } = useCancelInvitation()

  const token = (authData && authData.token) || ''

  return (
    <article className={styles.container}>
      <BaseImage width="80px" height="80px" alt={name} src={logoUrl} isCircle />
      <h3>{name}</h3>
      <p className={styles.paragraph}>
        <FaFootballBall />
        {SPORTS_NAMES[sport]}
      </p>
      <p className={styles.paragraph}>
        <FaCity />
        {city}
      </p>
      <p className={styles.paragraph}>
        <FaCalendarAlt />
        {formatDate(createdAt, 'Y-M-D')}
      </p>
      <p className={styles.paragraph}>{INVITATION_STATUS[status]}</p>
      {status === InvitationStatus.PENDING ? (
        <SolidButton
          size="medium"
          color="secondary"
          onClick={() => cancelInvitationMutation({ token, id })}
        >
          Anuluj
        </SolidButton>
      ) : (
        <div className={styles.placeholder} />
      )}
    </article>
  )
}
