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
        <DatosUsuarios />
        {/* <DatosPersonales />
        <DatosEntrega /> */}
      </FormSpace>
    </Box>
  )
}

export default Form
