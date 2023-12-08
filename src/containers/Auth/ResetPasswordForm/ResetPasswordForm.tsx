import { useState } from 'react'
import type { ReactElement, ChangeEvent, FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { isNil } from 'ramda'

import { extractValidationError } from '@Utils/functions'
import { ROUTES } from '@Router/routes'
import { useResetPassword } from '@Store/auth'
import { AuthHeader } from '@Components/Auth'
import { BaseInput, GradientButton } from '@Components/Shared'

import { validateInputs } from './validation'
import { RESET_PASSWORD_FIELDS } from './data'
import styles from './ResetPasswordForm.module.scss'

export type ResetPasswordData = {
  password: string
  confirmPassword: string
}

const initialState = {
  password: '',
  confirmPassword: '',
}

export function ResetPasswordForm(): ReactElement {
  const { resetPasswordMutation, isPending, error } = useResetPassword()
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState(initialState)
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') || ''

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }))
    setErrors((state) => ({ ...state, [e.target.name]: '' }))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const validationErrors = validateInputs(values)

    if (isNil(validationErrors)) {
      resetPasswordMutation({ password: values.password, token })
    } else {
      setErrors(validationErrors)
    }
  }

  const validationErrors = extractValidationError<ResetPasswordData>(
    initialState,
    error,
  )

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>
        <AuthHeader headre="Ustaw nowe hasło" />
        <div className={styles.inputs}>
          {RESET_PASSWORD_FIELDS.map((input) => (
            <BaseInput
              key={input.id}
              {...input}
              onChange={onChange}
              value={values[input.name]}
              error={errors[input.name] || validationErrors[input.name]}
              className={styles.input}
            />
          ))}
        </div>
        <GradientButton size="small" type="submit" disabled={isPending}>
          Zmień hasło
        </GradientButton>

        <div className={styles.links}>
          <Link to={ROUTES.SIGN_IN}>Zaloguj się</Link>
          <span> | </span>
          <Link to={ROUTES.SIGN_UP}>Zarejestruj się</Link>
        </div>
      </div>
    </form>
  )
}
