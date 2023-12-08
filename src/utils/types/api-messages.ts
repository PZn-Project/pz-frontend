export type SuccesMessage = {
  statusCode: number
  message: string
  error: boolean
}

export type SuccesMessageWithData<T> = {
  statusCode: number
  message: string
  error: boolean
  data: T // Response data
}

export type SuccesMessageWithPagination<T> = {
  statusCode: number
  message: string
  error: boolean
  data: T // Response data
  limit:number
  pageNumber:number

}

export type ErrorMessage = {
  statusCode: number
  message: string
  error: string
}

// Tylko gdy zwracamy błąd walidacji
export type ValidationError<T> = {
  statusCode: number
  message: T // validation object
  error: string
}
/*

Validation object example
{
  username: 'Username to short.',
  email: 'Please enter a valid email address',
  password: 'Poassword is to short.',

}




*/