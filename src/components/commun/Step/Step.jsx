import { useContext } from 'react'
import { CounterContext } from '../../../Context'
import { useAuth } from '../../../Hooks/useAuth'
import PropTypes from 'prop-types'
import { Box, TextField, Button } from '@mui/material'

function Step({ step, data, pasos }) {
  const { inputs, buttonText, onSubmit } = data
  const { count, user } = useContext(CounterContext)
  const access = useAuth(user.jwt)
  console.log(access)
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
      onSubmit={(e) => onSubmit(e, step, pasos)}>
      <strong>El valor del contador es {count} </strong>
      {inputs.map((input, index) => {
        const { label, type, value, valid, onChange, helperText, validator } = input
        return (
          <TextField
            key={index}
            label={label}
            variant='outlined'
            fullWidth
            margin='dense'
            type={type}
            error={valid === false}
            helperText={valid === false && helperText}
            value={value}
            onChange={(e) => onChange(e, index, step, validator, pasos)}
          />
        )
      })}
      <Button
        variant='contained'
        type='submit'>
        {buttonText}
      </Button>
    </Box>
  )
}

Step.propTypes = {
  // updateStep: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
  pasos: PropTypes.object.isRequired,
}

export default Step
