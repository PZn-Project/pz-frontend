import { AxiosError } from 'axios'
import { isNil } from 'ramda'
import { Nullish, ValidationError } from '@Utils/types'
import { HTTP_STATUS_CODE } from '@Utils/enums'

/**
 * Extracts validation error messages from Axios error object.
 * @param {T} emptyErrorState empty errorState.
 * @param {AxiosError<Partial<T>>} error Axios Error object.
 * @returns {T} error state with data extracted from Axios error object.
 */
export function extractValidationError<T>(
  emptyErrorState: T,
  error: Nullish<AxiosError<ValidationError<Partial<T | string>>>>,
): T {
  if (isNil(error) || isNil(error.response) || isNil(error.response.data)) {
    return emptyErrorState
  }

  const { message, statusCode } = error.response.data

  if (statusCode !== HTTP_STATUS_CODE.BAD_REQUEST) {
    return emptyErrorState
  }

  if (typeof message !== 'object') {
    return emptyErrorState
  }

  return { ...emptyErrorState, ...message }
}
