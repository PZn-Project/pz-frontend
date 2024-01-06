import { type ReactElement } from 'react'

import styles from './Logout.module.scss'

export function Logout(): ReactElement {
  return (
    <div className={styles.messageContainer}>
      <img
        src="./common/logout.png"
        alt="Internal server error."
        className={styles.image}
      />
      <h2>Pomyślnie wylogowano !</h2>
    </div>
  )
}
