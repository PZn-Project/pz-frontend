import { ReactElement } from 'react'
import clsx from 'clsx'

import { imageErrorhandler } from '@Utils/functions'

import styles from './BaseImage.module.scss'

type BaseImageProps = {
  src: string
  alt: string
  width: string
  height: string
  className?: string
  isCircle?: boolean
}

export function BaseImage({
  src,
  alt,
  width,
  height,
  className,
  isCircle = false,
}: BaseImageProps): ReactElement {
  return (
    <div
      className={clsx(className, { [styles.isCircle]: isCircle })}
      style={{ width: width, height: height }}
    >
      <picture className={styles.imagePicture}>
        <img
          className={styles.imageImg}
          src={src}
          alt={alt}
          onError={imageErrorhandler}
        />
      </picture>
    </div>
  )
}
