import { type ReactElement } from 'react'
import { Feature } from '@Components/Home'
import { FEATURS_DATA } from './data'
import styles from './FeatureSection.module.scss'

export const FeatureSection = (): ReactElement => {
  return (
    <section className={styles.features}>
      {FEATURS_DATA.map(({ id, ...restProps }, index) => (
        <Feature key={id} {...restProps} isLeft={Boolean(index % 2)} />
      ))}
    </section>
  )
}
