import { type ReactElement } from 'react'
import styles from './AuthHeader.module.scss'
import clsx from 'clsx'

import logo from '@Assets/svg/logo-white.svg'

type Props = {
  headre: string
  className?: string
}

export function AuthHeader({ headre, className }: Props): ReactElement {
  return (
    <div className={clsx(styles.container, className)}>
      <img src={logo} alt="Logo FunFits." />
      <hr />
      <h2>{headre}</h2>
    </div>
  )
}
