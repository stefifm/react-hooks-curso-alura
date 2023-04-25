import { Button } from '@mui/material'
import Form from './components/pages/Form/Form'
import { CounterContext } from './Context'
import { useContext } from 'react'
import { MainSpace, ImageSpace, FormSpaceMain } from './styles'

function App() {
  const { increment, decrement } = useContext(CounterContext)
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpaceMain>
        <Form />
        <Button
          variant='contained'
          onClick={increment}>
          +
        </Button>
        <Button
          variant='contained'
          onClick={decrement}>
          -
        </Button>
      </FormSpaceMain>
    </MainSpace>
  )
}

export default App
