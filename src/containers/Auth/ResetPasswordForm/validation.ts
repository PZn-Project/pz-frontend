import { isEmpty } from 'ramda'
import type { ResetPasswordData } from './ResetPasswordForm'

export function validateInputs({
  password,
  confirmPassword,
}: ResetPasswordData) {
  const passwordMsg = validatePassword(password)
  const confirmPasswordMsg = validateConfirmPassword(password, confirmPassword)

  if (isEmpty(passwordMsg) && isEmpty(confirmPasswordMsg)) {
    return null
  }

  return {
    password: passwordMsg,
    confirmPassword: confirmPasswordMsg,
  }
}

function validatePassword(password: string): string {
  return password.length >= 8
    ? ''
    : 'Hasło powinno składać się minimum z 8 znaków.'
}

function validateConfirmPassword(
  password: string,
  confirmPassword: string,
): string {
  return password === confirmPassword
    ? ''
    : 'Wprowadzone hasła nie są identyczne.'
}
