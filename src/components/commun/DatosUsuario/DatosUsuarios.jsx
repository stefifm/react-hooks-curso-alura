import { Box, TextField, Button } from '@mui/material'

function DatosUsuarios() {
  return (
    <Box
      component='form'
      autoComplete='off'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextField
        label='Email'
        variant='outlined'
        fullWidth
        margin='dense'
        type='email'
        error={false}
        helperText={false && 'Ingrese un email válido'}
      />
      <TextField
        label='Contraseña'
        variant='outlined'
        fullWidth
        margin='dense'
        type='password'
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
