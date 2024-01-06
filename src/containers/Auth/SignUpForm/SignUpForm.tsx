import { useState } from 'react'
import type { ReactElement, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { isNil } from 'ramda'

import { extractValidationError } from '@Utils/functions'
import { ROUTES } from '@Router/routes'
import { useSignUp } from '@Store/auth'
import { AuthHeader } from '@Components/Auth'
import { BaseInput, GradientButton } from '@Components/Shared'

import { validateInputs } from './validation'
import { SIGN_UP_FIELDS } from './data'
import styles from './SignUpForm.module.scss'

export type SignUpData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export function SignUpForm(): ReactElement {
  const { signUpMutation, isPending, error } = useSignUp()
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState(initialState)

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }))
    setErrors((state) => ({ ...state, [e.target.name]: '' }))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const validationErrors = validateInputs(values)

    if (isNil(validationErrors)) {
      signUpMutation(values)
    } else {
      setErrors(validationErrors)
    }
  }

  const validationErrors = extractValidationError<SignUpData>(
    initialState,
    error,
  )

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>
        <AuthHeader headre="Stwórz nowe konto" />
        <div className={styles.inputs}>
          {SIGN_UP_FIELDS.map((input) => (
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
          Zarejestruj się
        </GradientButton>

        <div className={styles.links}>
          <Link to={ROUTES.SIGN_IN}>Zaloguj się</Link>
          <span> | </span>
          <Link to={ROUTES.RECOVERY}>Odzyskaj konto</Link>
        </div>
      </div>
    </form>
  )
}
