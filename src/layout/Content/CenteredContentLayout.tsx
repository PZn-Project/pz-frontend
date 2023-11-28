import { type ReactElement, PropsWithChildren } from 'react'
import styles from './CenteredContentLayout.module.scss'

const CenteredContentLayout = ({
  children,
}: PropsWithChildren): ReactElement => {
  return <div className={styles.wrapper}>{children}</div>
}

export default CenteredContentLayout
