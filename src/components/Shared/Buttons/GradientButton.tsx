import { type ReactElement, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './GradientButton.module.scss'

type Props = {
  size: 'small' | 'medium'
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const GradientButton = ({
  size,
  children,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: Props): ReactElement => {
  const buttonClassNames = clsx(styles.button, styles[size], className, {
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
