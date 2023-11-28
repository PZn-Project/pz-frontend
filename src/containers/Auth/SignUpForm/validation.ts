import { isEmpty } from 'ramda'
import type { SignUpData } from './SignUpForm'

export function validateInputs({
  username,
  email,
  password,
  confirmPassword,
}: SignUpData) {
  const usernameMsg = validateUsername(username)
  const emailMsg = validateEmail(email)
  const passwordMsg = validatePassword(password)
  const confirmPasswordMsg = validateConfirmPassword(password, confirmPassword)

  if (
    isEmpty(usernameMsg) &&
    isEmpty(emailMsg) &&
    isEmpty(passwordMsg) &&
    isEmpty(confirmPasswordMsg)
  ) {
    return null
  }

  return {
    username: usernameMsg,
    email: emailMsg,
    password: passwordMsg,
    confirmPassword: confirmPasswordMsg,
  }
}

function validateEmail(email: string): string {
  const regex = /^\S+@\S+\.\S+$/
  const message = 'Wprowadź prawidłowy adres Email.'
  return regex.test(email) ? '' : message
}

function validateUsername(username: string): string {
  return username.length >= 3 ? '' : 'Nazwa użytkownika jest zbyt krótka.'
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
  return password === confirmPassword ? '' : "Wprowadzone hasła nie są identyczne."
}
