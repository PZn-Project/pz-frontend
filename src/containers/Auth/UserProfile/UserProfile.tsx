import { ReactElement } from 'react'
import { isNil } from 'ramda'

import { Nullable } from '@Utils/types'
import { useUser } from '@Store/auth'
import { BaseImage, SolidButton } from '@Components/Shared'

import styles from './UserProfile.module.scss'

export function UserProfile(): Nullable<ReactElement> {
  const { authData } = useUser()

  return isNil(authData) ? null : (
    <article className={styles.container}>
      <BaseImage
        src={authData.image || '/public/common/user.png'}
        alt="Zdjęcie urzytkownika"
        width="200px"
        height="200px"
        isCircle
      />
      <div className={styles.info}>
        <h2>Dane Konta</h2>
        <p>
          Nazwa użytkownika: <b>{authData.username}</b>
        </p>
        <p>
          Adres email: <b>{authData.email}</b>
        </p>
      </div>
      <div className={styles.actions}>
        <SolidButton size="small">Edytuj Zjęcie</SolidButton>
        <SolidButton size="small">Zmień Email</SolidButton>
        <SolidButton size="small">Zmień Hasło</SolidButton>
        <SolidButton size="small">Usuń Konto</SolidButton>
      </div>
    </article>
  )
}
