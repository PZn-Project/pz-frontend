import { useState } from 'react'
import type { ReactElement, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { omit } from 'ramda'

import { useSignIn } from '@Store/auth'
import { ROUTES } from '@Router/routes'
import { AuthHeader } from '@Components/Auth'
import { BaseInput, GradientButton } from '@Components/Shared'

import { SIGN_IN_FIELDS } from './data'
import styles from './SignInForm.module.scss'

export function SignInForm(): ReactElement {
  const { signInMutation, isPending } = useSignIn()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    signInMutation(omit(['confirmPassword'], values))
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>
        <AuthHeader headre="Zaloguj się do konta" />
        <div className={styles.inputs}>
          {SIGN_IN_FIELDS.map((input) => (
            <BaseInput
              key={input.id}
              {...input}
              onChange={onChange}
              value={values[input.name]}
              className={styles.input}
            />
          ))}
        </div>
        <GradientButton size="small" type="submit" disabled={isPending}>
          Zaloguj się
        </GradientButton>

        <div className={styles.links}>
          <Link to={ROUTES.SIGN_UP}>Zarejestruj się</Link>
          <span> | </span>
          <Link to={ROUTES.RECOVERY}>Odzyskaj konto</Link>
        </div>
      </div>
    </form>
  )
}
