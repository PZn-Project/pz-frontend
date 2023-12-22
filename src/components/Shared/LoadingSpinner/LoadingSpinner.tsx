import { type ReactElement } from 'react'
import styles from './LoadingSpinner.module.scss'

export function LoadingSpinner(): ReactElement {
  return (
    <div className={styles.spinner}>
      <picture className={styles.picture}>
        <img
          className={styles.img}
          src="./common/loading.png"
          alt="Loading ..."
        />
        <div className={styles.circle}>
          <div className={styles.arrow}></div>
        </div>
      </picture>
    </div>
  )
}
