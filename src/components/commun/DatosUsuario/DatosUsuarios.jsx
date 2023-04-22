import { useState } from 'react'
import { validarEmail, validarPassword } from './validation'
import { Box, TextField, Button } from '@mui/material'

function DatosUsuarios() {
  const [email, setEmail] = useState({
    value: '',
    valid: null,
  })
  const [password, setPassword] = useState({
    value: '',
    valid: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.valid && password.valid) {
      console.log('Siguiente')
      console.log(email)
      console.log(password)
    } else {
      console.log('No se puede continuar')
    }
  }

  return (
    <Box
      component='form'
      autoComplete='off'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onSubmit={handleSubmit}>
      <TextField
        label='Email'
        variant='outlined'
        fullWidth
        margin='dense'
        type='email'
        error={email.valid === false}
        helperText={email.valid === false && 'Ingrese un email válido'}
        value={email.value}
        onChange={(e) => {
          const value = e.target.value
          const isValid = validarEmail(value)
          setEmail({
            value,
            valid: isValid,
          })
        }}
      />
      <TextField
        label='Contraseña'
        variant='outlined'
        fullWidth
        margin='dense'
        type='password'
        error={password.valid === false}
        helperText={
          password.valid === false &&
          'Contraseña debe ser mayor o igual a 8 caracteres y menor a 50'
        }
        value={password.value}
        onChange={(e) => {
          const value = e.target.value
          const isValid = validarPassword(value)
          setPassword({
            value,
            valid: isValid,
          })
        }}
      />
      <Button
        variant='contained'
        type='submit'>
        Siguiente
      </Button>
    </Box>
  )
}

export default DatosUsuarios
