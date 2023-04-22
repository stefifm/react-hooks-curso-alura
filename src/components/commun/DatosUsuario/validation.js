export const validarEmail = (email) => {
  const length = email.length

  return length > 8 && length < 50 && email.includes('@')
}
export const validarPassword = (password) => {
  const length = password.length

  return length >= 8 && length < 50
}