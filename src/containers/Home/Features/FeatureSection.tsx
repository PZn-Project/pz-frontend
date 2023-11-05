import { type ReactElement } from 'react'
import { Feature } from '@Components/Home'

import styles from './FeatureSection.module.scss'
import { FEATURS_DATA } from './data'

export const FeatureSection = (): ReactElement => {
  return (
    <section className={styles.features}>
      {FEATURS_DATA.map(({ id, ...restProps }, index) => (
        <Feature key={id} {...restProps} isLeft={Boolean(index % 2)} />
      ))}
    </section>
  )
}
