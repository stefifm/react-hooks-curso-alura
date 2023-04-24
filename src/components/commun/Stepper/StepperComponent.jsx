import PropTypes from 'prop-types'
import { Box, Stepper, Step, StepLabel } from '@mui/material'

function StepperComponent({ step }) {
  const steps = ['Datos de usuario', 'Datos personales', 'Datos de entrega']
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

StepperComponent.propTypes = {
  step: PropTypes.number.isRequired,
}
export default StepperComponent
