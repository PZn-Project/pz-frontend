import { type ReactElement } from 'react'
import styles from './ErrorContainer.module.scss'
import WidePageLayout from '@Layout/Page/WidePageLayout'

import internalServerError from '@Assets/img/internal-server-error.png'

export const ErrorPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <div className={styles.messageContainer}>
        <img
          src={internalServerError}
          alt="Internal server error."
          className={styles.image}
        />
        <h2>Something went wrong !</h2>
      </div>
    </WidePageLayout>
  )
}
