import { type ReactElement } from 'react'
import { IconType } from 'react-icons'
import clsx from 'clsx'
import styles from './Feature.module.scss'

type FeatureProps = {
  title: string
  text: string
  src: string
  alt: string
  isLeft: boolean
  Icon: IconType
}

export const Feature = ({
  title,
  text,
  src,
  alt,
  isLeft,
  Icon,
}: FeatureProps): ReactElement => {
  const contentClassNames = clsx(styles.content, {
    [styles.contentLeft]: isLeft,
    [styles.contentRight]: !isLeft,
  })

  const pictureClassNames = clsx(styles.picture, {
    [styles.pictureLeft]: isLeft,
    [styles.pictureRight]: !isLeft,
  })
  return (
    <article className={styles.feature}>
      <div className={contentClassNames}>
        <h3>
          <Icon /> {title}
        </h3>
        <p>{text}</p>
      </div>
      <picture className={pictureClassNames}>
        <img src={src} alt={alt} />
      </picture>
    </article>
  )
}
