import { Box, TextField, Button } from '@mui/material'

function DatosPersonales() {
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
        label='Nombre'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
      />
      <TextField
        label='Apellido'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
      />
      <TextField
        label='Número de teléfono'
        variant='outlined'
        fullWidth
        margin='dense'
        type='number'
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
      <Button
        variant='contained'
        type='submit'>
        Siguiente
      </Button>
    </Box>
  )
}

export default DatosPersonales
