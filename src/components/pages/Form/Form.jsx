import { useState, useEffect } from 'react'
import {
  validarEmail,
  validarPassword,
  validarNombre,
  validarApellido,
  validarTelefono,
  validarDireccion,
  validarCiudad,
  validarEstado,
} from '../../../validation'
import { Box, Typography } from '@mui/material'
import { FormSpace, Img2, LogoSpace } from './styles'
import {
  DatosEntrega,
  DatosPersonales,
  DatosUsuarios,
  Complete,
  StepperComponent,
  Step,
} from '../../commun'

function Form() {
  const [step, setStep] = useState(0)
  const [pasos, setPasos] = useState({})

  useEffect(() => {}, [])

  // Implementación con una api pero no lo usaremos en este proyecto

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  //       const json = await data.json()
  //       console.log(json)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  const updateStep = (step) => {
    setStep(step)
  }

  const onSubmit = () => {}

  const handleChange = (e, position, currentStep, validator) => {
    const value = e.target.value
    const valid = validator(value)
  }

  const steps = {
    0: <DatosUsuarios updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: 'Email',
          type: 'email',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Ingresar un email válido',
          validator: validarEmail,
        },
        {
          label: 'Contraseña',
          type: 'password',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Contraseña debe ser mayor o igual a 8 caracteres y menor a 50',
          validator: validarPassword,
        },
      ],
      buttonText: 'Siguiente',
      onSubmit,
    },
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
        {/* {steps[step]} */}
        <Step
          data={stepsFlow[step]}
          step={step}
        />
      </FormSpace>
    </Box>
  )
}

export default Form
