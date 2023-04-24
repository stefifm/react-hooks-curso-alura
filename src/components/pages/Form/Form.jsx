import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { FormSpace, Img2, LogoSpace } from './styles'
import {
  DatosEntrega,
  DatosPersonales,
  DatosUsuarios,
  Complete,
  StepperComponent,
} from '../../commun'

function Form() {
  const [step, setStep] = useState(0)

  const updateStep = (step) => {
    setStep(step)
  }

  const steps = {
    0: <DatosUsuarios updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  }

  return (
    <Box
      sx={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <LogoSpace>
        <Img2 src={'/favicon.png'} />
        <Typography variant='h3'>AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <StepperComponent step={step} />}
        {steps[step]}
      </FormSpace>
    </Box>
  )
}

export default Form
