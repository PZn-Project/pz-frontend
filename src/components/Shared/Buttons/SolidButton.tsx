import { type ReactElement, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './SolidButton.module.scss'

type Props = {
  size: 'small' | 'medium'
  children: ReactNode
  color: 'primary' | 'secondary' | 'red'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const SolidButton = ({
  size,
  children,
  color,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: Props): ReactElement => {
  const buttonClassNames = clsx(styles.button, styles[size], className, {
    [styles.colorPD]: color === 'primary',
    [styles.colorSD]: color === 'secondary',
    [styles.colorRD]: color === 'red',
    [styles.disabled]: disabled,
  })

  return (
    <button
      className={buttonClassNames}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
