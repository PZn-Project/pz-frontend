import { useEffect, type ReactElement } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useActivateAccount } from '@Store/auth'

import styles from './AccountActivation.module.scss'
import { isEmpty } from 'ramda'
import { LoadingSpinner } from '@Components/Shared'

export function AccountActivation(): ReactElement {
  const [searchParams] = useSearchParams()
  const { data, error, isPending, activateAccountMutation } =
    useActivateAccount()
  const token = searchParams.get('token') || ''

  useEffect(() => {
    if (!isEmpty(token)) {
      activateAccountMutation({ token })
    }
  }, [token, activateAccountMutation])

  return isPending ? (
    <LoadingSpinner />
  ) : (
    <div>
      <div className={styles.messageContainer}>
        <img
          src="./common/activation.png"
          alt="Internal server error."
          className={styles.image}
        />
        {data && <h2 className={styles.succes}>{data.message}</h2>}
        {error && <h2 className={styles.error}>{error.message}</h2>}
      </div>
    </div>
  )
}
