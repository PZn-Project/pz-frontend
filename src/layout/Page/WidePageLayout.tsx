import { type ReactElement, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './WidePageLayout.module.scss'

type WidePageLayoutProps = {
  className?: string
}

const WidePageLayout = ({
  children,
  className,
}: PropsWithChildren<WidePageLayoutProps>): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.content, className)}>{children}</div>
    </div>
  )
}

export default WidePageLayout
