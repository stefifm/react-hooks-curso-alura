import styled from 'styled-components'
import { Box, Typography } from '@mui/material'
import complete from '../../../assets/images/complete.png'

const Img = styled.img`
  width: 70%;
`

function Complete() {
  return (
    <Box>
      <Typography variant='h4'>¡¡Gracias por tu registro!!</Typography>
      <Img src={complete} />
    </Box>
  )
}

export default Complete
