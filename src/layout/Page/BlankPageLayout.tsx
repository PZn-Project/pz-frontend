import { type ReactElement, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './BlankPageLayout.module.scss'

type Props = PropsWithChildren<{
  className?: string
}>

function BlankPageLayout({ children, className }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.content, className)}>{children}</div>
    </div>
  )
}

export default BlankPageLayout
