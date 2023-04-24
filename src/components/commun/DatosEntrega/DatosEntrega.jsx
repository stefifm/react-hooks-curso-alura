import { useState } from 'react'
import PropTypes from 'prop-types'
import { validarDireccion, validarCiudad, validarEstado } from '../../../validation'
import { Box, TextField, Button } from '@mui/material'

function DatosEntrega({ updateStep }) {
  const [address, setAddress] = useState({
    value: '',
    valid: null,
  })
  const [city, setCity] = useState({
    value: '',
    valid: null,
  })
  const [state, setState] = useState({
    value: '',
    valid: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Siguiente')
    console.log(address, city, state)
    updateStep(3)
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
        label='Dirección'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={address.value}
        error={address.valid === false}
        helperText={address.valid === false && 'Dirección tiene que tener más de 4 carcteres'}
        onChange={(e) => {
          const value = e.target.value
          const isValid = validarDireccion(value)
          setAddress({
            value,
            valid: isValid,
          })
        }}
      />
      <TextField
        label='Ciudad'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={city.value}
        error={city.valid === false}
        helperText={city.valid === false && 'Ciudad tiene que tener más de 4 caracteres'}
        onChange={(e) => {
          const value = e.target.value
          const isValid = validarCiudad(value)
          setCity({
            value,
            valid: isValid,
          })
        }}
      />
      <TextField
        label='Estado/Provincia'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={state.value}
        error={state.valid === false}
        helperText={state.valid === false && 'Estado/Provincia tiene que tener más de 4 caracteres'}
        onChange={(e) => {
          const value = e.target.value
          const isValid = validarEstado(value)
          setState({
            value,
            valid: isValid,
          })
        }}
      />
      <Button
        variant='contained'
        type='submit'>
        Crear Cuenta
      </Button>
    </Box>
  )
}

DatosEntrega.propTypes = {
  updateStep: PropTypes.func.isRequired,
}

export default DatosEntrega
