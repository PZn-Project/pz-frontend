import { SyntheticEvent } from 'react'
import defaultImage from '@Assets/img/image.png'

export const imageErrorhandler = (
  event: SyntheticEvent<HTMLImageElement, Event>,
) => {
  const img = event.currentTarget
  img.src = defaultImage
}
