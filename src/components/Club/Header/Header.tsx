import { type ReactElement } from 'react'
import styles from './Header.module.scss'
import clsx from 'clsx'

type Props = {
  header: string
  className?: string
}

export function Header({ header, className }: Props): ReactElement {
  return (
    <div className={clsx(styles.container, className)}>
      <h2>{header}</h2>
    </div>
  )
}
