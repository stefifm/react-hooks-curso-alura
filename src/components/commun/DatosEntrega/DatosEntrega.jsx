import { Box, TextField, Button } from '@mui/material'

function DatosEntrega() {
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
        label='Dirección'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
      />
      <TextField
        label='Ciudad'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
      />
      <TextField
        label='Estado/Provincia'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
      />
      <Button
        variant='contained'
        type='submit'>
        Crear Cuenta
      </Button>
    </Box>
  )
}

export default DatosEntrega
