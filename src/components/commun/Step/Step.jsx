import { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, TextField, Button } from '@mui/material'

function Step({ step, data }) {
  const { inputs, buttonText, onSubmit } = data
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
      onSubmit={onSubmit}>
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
            onChange={(e) => onChange(e, index, step, validator)}
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
}

export default Step
