const FORMATS = {
  'Y-M-D': {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  },
  'Y-ML-D': {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
  'Y-M-D-H-M': {
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  },
} as const

export type DateFormat = 'Y-M-D' | 'Y-M-D-H-M' | 'Y-ML-D'

export const formatDate = (dateString: string, format: DateFormat): string => {
  const language = navigator.language
  const date = new Date(dateString)
  const formatedDate = new Intl.DateTimeFormat(
    language,
    FORMATS[format],
  ).format(date.getTime())

  return formatedDate
}
