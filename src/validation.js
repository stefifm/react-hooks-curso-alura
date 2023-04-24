export const validarEmail = (email) => {
  const length = email.length

  return length > 8 && length < 50 && email.includes('@')
}
export const validarPassword = (password) => {
  const length = password.length

  return length >= 8 && length < 50
}

export const validarNombre = (nombre) => {
  const length = nombre.length

  return length > 1 && length < 30
}

export const validarApellido = (apellido) => {
  const length = apellido.length

  return length > 1 && length < 50
}

export const validarTelefono = (telefono) => {
  const length = telefono.length

  return length >= 8 && length <= 14
}

export const validarDireccion = (direccion) => {
  const length = direccion.length

  return length > 4
}

export const validarCiudad = (ciudad) => {
  const length = ciudad.length

  return length > 4
}

export const validarEstado = (estado) => {
  const length = estado.length

  return length > 4
}