import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react'

function DatosUsuarios() {
  const [email, setEmail] = useState({
    value: '',
    valid: true,
  })
  const [password, setPassword] = useState({
    value: '',
    valid: true,
  })
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
      onSubmit={(e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
      }}>
      <TextField
        label='Email'
        variant='outlined'
        fullWidth
        margin='dense'
        type='email'
        error={false}
        helperText={false && 'Ingrese un email válido'}
        value={email.value}
        onChange={(e) => {
          const value = e.target.value
          setEmail({
            value,
            valid: true,
          })
        }}
      />
      <TextField
        label='Contraseña'
        variant='outlined'
        fullWidth
        margin='dense'
        type='password'
        value={password.value}
        onChange={(e) => {
          const value = e.target.value
          setPassword({
            value,
            valid: true,
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
