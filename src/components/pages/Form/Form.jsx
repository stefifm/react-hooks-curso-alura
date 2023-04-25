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

  const onSubmit = (e, step, pasos) => {
    e.preventDefault()
    const newStep = step + 1
    setStep(newStep)
    if (newStep === 3) {
      console.log('Enviar datos al backend ', pasos)
    }
  }

  const handleChange = (e, position, currentStep, validator, pasos) => {
    const value = e.target.value
    const valid = validator(value)
    const cp = { ...pasos }
    cp[currentStep].inputs[position].value = value
    cp[currentStep].inputs[position].valid = valid
    setPasos(cp)
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
        {
          label: 'Cuenta de GitHub',
          type: 'text',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Cuenta de GitHub debe ser mayor o igual a 8 caracteres y menor a 50',
          validator: validarPassword,
        },
      ],
      buttonText: 'Siguiente',
      onSubmit,
    },
    1: {
      inputs: [
        {
          label: 'Nombre',
          type: 'text',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Tiene que tener más de un caracter y menos de 30',
          validator: validarNombre,
        },
        {
          label: 'Apellido',
          type: 'text',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Tiene que tener más de 2 caracteres y menos de 50',
          validator: validarApellido,
        },
        {
          label: 'Número de Teléfono',
          type: 'number',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Tiene que tener al menos 8 digitos y menor o igual a 14 digitos',
          validator: validarTelefono,
        },
      ],
      buttonText: 'Siguiente',
      onSubmit,
    },
    2: {
      inputs: [
        {
          label: 'Dirección',
          type: 'text',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Dirección tiene que tener más de 4 carcteres',
          validator: validarDireccion,
        },
        {
          label: 'Ciudad',
          type: 'text',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Ciudad tiene que tener más de 4 caracteres',
          validator: validarCiudad,
        },
        {
          label: 'Número de Teléfono',
          type: 'tex',
          value: '',
          valid: null,
          onChange: handleChange,
          helperText: 'Estado tiene que tener más de 4 caracteres',
          validator: validarEstado,
        },
      ],
      buttonText: 'Crear Cuenta',
      onSubmit,
    },
  }

  useEffect(() => {
    setPasos(stepsFlow)
  }, [])

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
        {step < 3 && pasos[step] && (
          <Step
            data={pasos[step]}
            step={step}
            pasos={pasos}
          />
        )}
        {step === 3 && <Complete />}
      </FormSpace>
    </Box>
  )
}

export default Form
