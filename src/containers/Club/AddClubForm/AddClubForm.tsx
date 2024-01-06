import { useState } from 'react'
import type { ReactElement, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { useAddClub } from '@Store/club'
import { ROUTES } from '@Router/routes'
import { Header } from '@Components/Club/Header'
import { BaseInput, GradientButton } from '@Components/Shared'

import { ADD_CLUB_FIELDS, ADD_CLUB_FIELDS_ADDRESS } from './data'
import styles from './AddClubForm.module.scss'

export function AddClubForm(): ReactElement {
  const { addClubMutation, isPending } = useAddClub()
  const [values, setValues] = useState({
    name: '',
    sport: '',
    description: '',
    logoUrl: '',
    province: '',
    city: '',
    street: '',
    addressNumber: '',
  })

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    addClubMutation({ ...values, members: [] })
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>
        <Header header="Utwórz nowy klub" />
        <div className={styles.inputs}>
          {ADD_CLUB_FIELDS.map((input) => (
            <BaseInput
              key={input.id}
              {...input}
              onChange={onChange}
              value={values[input.name]}
              className={styles.input}
            />
          ))}
        </div>
        <div className={styles.inputs}>
          {ADD_CLUB_FIELDS_ADDRESS.map((input) => (
            <BaseInput
              key={input.id}
              {...input}
              onChange={onChange}
              value={values[input.name]}
              className={styles.input}
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <Link to={ROUTES.CLUBS}>
            <GradientButton size="small" type="button">
              Anuluj
            </GradientButton>
          </Link>
          <GradientButton size="small" type="submit" disabled={isPending}>
            Dodaj klub
          </GradientButton>
        </div>
      </div>
    </form>
  )
}
