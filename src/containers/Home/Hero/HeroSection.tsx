import { type ReactElement, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ROUTES } from '@Router/routes'
import { ACTIONS, IMAGES } from './data'
import styles from './HeroSection.module.scss'

export const HeroSection = (): ReactElement => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => state + 1)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const getLabel = () => {
    return ACTIONS[index % ACTIONS.length].label
  }

  const getColor = () => {
    return ACTIONS[index % ACTIONS.length].color
  }

  return (
    <section className={styles.hero}>
      <div className={styles['heroElement-1']}>
        <h2 className={styles.heroHeader}>
          Let's
          <span className={clsx(styles.heroSpan, styles[`${getColor()}`])}>
            {getLabel()}
          </span>
          Together
        </h2>
      </div>
      {IMAGES.map((item, i) => (
        <div key={item.src} className={styles[`heroElement-${2 + i}`]}>
          <picture className={styles.heroPicture}>
            <img className={styles.heroImg} src={item.src} alt={item.alt} />
          </picture>
        </div>
      ))}

      <div className={styles['heroElement-10']}>
        <Link className={styles.heroLink} to={ROUTES.SIGN_UP}>
          Dołącz teraz
        </Link>
      </div>
    </section>
  )
}
