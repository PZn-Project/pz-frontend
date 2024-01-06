import { useState } from 'react'
import type { ReactElement, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'

import { useRecovery } from '@Store/auth'
import { ROUTES } from '@Router/routes'
import { AuthHeader } from '@Components/Auth'
import { BaseInput, GradientButton } from '@Components/Shared'

import styles from './RecoveryForm.module.scss'

export function RecoveryForm(): ReactElement {
  const { recoveryMutation, isPending } = useRecovery()
  const [value, setValue] = useState('')

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    recoveryMutation({ email: value })
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>
        <AuthHeader headre="Odzyskaj swoje konto" />
        <div className={styles.inputs}>
          <BaseInput
            name="email"
            type="email"
            placeholder="Email"
            required
            Icon={MdEmail}
            onChange={onChange}
            value={value}
            className={styles.input}
          />
          <p>
            Podaj adres e-mail powiązany z Twoim kontem. Prześlemy na niego
            dalsze instrukcje.
          </p>
        </div>
        <GradientButton size="small" type="submit" disabled={isPending}>
          Odzyskaj
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
