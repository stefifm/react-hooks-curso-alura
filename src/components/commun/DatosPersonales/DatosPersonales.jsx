import { useState } from 'react'
import PropTypes from 'prop-types'
import { validarNombre, validarApellido, validarTelefono } from '../../../validation'
import { Box, TextField, Button } from '@mui/material'

function DatosPersonales({ updateStep }) {
  const [firstName, setFisrtName] = useState({
    value: '',
    valid: null,
  })
  const [lastName, setLastName] = useState({
    value: '',
    valid: null,
  })
  const [phone, setPhone] = useState({
    value: '',
    valid: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Siguiente')
    console.log(firstName, lastName, phone)
    updateStep(2)
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
        label='Nombre'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        error={firstName.valid === false}
        helperText={firstName.valid === false && 'Tiene que tener más de un caracter y menos de 30'}
        value={firstName.value}
        onChange={(e) => {
          const value = e.target.value
          const isValid = validarNombre(value)
          setFisrtName({
            value,
            valid: isValid,
          })
        }}
      />
      <TextField
        label='Apellido'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={lastName.value}
        error={lastName.valid === false}
        helperText={lastName.valid === false && 'Tiene que tener más de 2 caracteres y menos de 50'}
        onChange={(e) => {
          const value = e.target.value
          const isValid = validarApellido(value)
          setLastName({
            value,
            valid: isValid,
          })
        }}
      />
      <TextField
        label='Número de teléfono'
        variant='outlined'
        fullWidth
        margin='dense'
        type='number'
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        value={phone.value}
        error={phone.valid === false}
        helperText={
          phone.valid === false && 'Tiene que tener al menos 8 digitos y menor o igual a 14 digitos'
        }
        onChange={(e) => {
          const value = e.target.value
          const isValid = validarTelefono(value)
          setPhone({
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

DatosPersonales.propTypes = {
  updateStep: PropTypes.func.isRequired,
}

export default DatosPersonales
