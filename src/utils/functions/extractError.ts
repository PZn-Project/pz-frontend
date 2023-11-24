import { AxiosError } from 'axios'
import { isNil } from 'ramda'
import { ErrorMessage, Nullable, Nullish } from '@Utils/types'
import { HTTP_STATUS_CODE } from '@Utils/enums'

/**
 * Extracts error response data from Axios error object. It returns null for BadRequestException
 * @param {AxiosError<ErrorMessage>} error Axios Error object.
 * @returns {Nullable<ErrorMessage>} error object or null.
 */
export function extractError(
  error: Nullish<AxiosError<ErrorMessage>>,
): Nullable<ErrorMessage> {
  if (isNil(error) || isNil(error.response) || isNil(error.response.data)) {
    return null
  }

  const { data } = error.response

  if (data.statusCode === HTTP_STATUS_CODE.BAD_REQUEST) {
    return null
  }

  return data
}
