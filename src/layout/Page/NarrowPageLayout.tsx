import { type ReactElement, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './NarrowPageLayout.module.scss'

type NarrowPageLayoutProps = {
  className?: string
}

const NarrowPageLayout = ({
  children,
  className,
}: PropsWithChildren<NarrowPageLayoutProps>): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.content, className)}>{children}</div>
    </div>
  )
}

export default NarrowPageLayout
