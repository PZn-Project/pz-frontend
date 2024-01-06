/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import type { ReactElement, ChangeEvent } from 'react'
import type { IconType } from 'react-icons'
import { isEmpty, isNil } from 'ramda'
import clsx from 'clsx'
import styles from './BaseInput.module.scss'
import { SelectOption } from '@Utils/types/select'

type Props = {
  name: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  label?: { id: string; text: string }
  Icon?: IconType
  error?: string
  placeholder?: string
  options?: SelectOption[]
} & Partial<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

export function BaseInput({
  id,
  value,
  name,
  className,
  onChange,
  type,
  placeholder,
  label,
  Icon,
  options = [],
  error = '',
}: Props): ReactElement {
  const [focused, setFocused] = useState<boolean>(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  const containerClassName = clsx(styles.container, className)

  const inputFieldClassName = clsx(styles.inputField, {
    [styles.inputActive]: focused,
    [styles.inputError]: !isEmpty(error),
  })

  const iconWrapperClassName = clsx(styles.iconWrapper, {
    [styles.largeIconWrapper]: type === 'textarea',
  })

  return (
    <div className={containerClassName}>
      {label && <label htmlFor={label.id}>{label.text}</label>}
      <div className={inputFieldClassName}>
        {Icon && (
          <div className={iconWrapperClassName}>
            <Icon />
          </div>
        )}
        {type === 'select' && (
          <select
            id={label?.id || id || ''}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        )}
        {type === 'textarea' && (
          <textarea
            id={label?.id || id || ''}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            rows={4}
          />
        )}
        {type !== 'textarea' && type !== 'select' && (
          <input
            id={label?.id || id || ''}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        )}
      </div>
      {<span>{!isNil(error) && error}</span>}
    </div>
  )
}
