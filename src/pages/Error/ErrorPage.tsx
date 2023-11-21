import { type ReactElement } from 'react'
import WidePageLayout from '@Layout/Page/WidePageLayout'
import styles from './ErrorContainer.module.scss'

export const ErrorPage = (): ReactElement => {
  return (
    <WidePageLayout>
      <div className={styles.messageContainer}>
        <img
          src="./common/internal_server_error.png"
          alt="Internal server error."
          className={styles.image}
        />
        <h2>Something went wrong !</h2>
      </div>
    </WidePageLayout>
  )
}
