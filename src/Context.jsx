import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const user = {
    status: 'outline',
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  }

  return (
    <CounterContext.Provider value={{ count, increment, decrement, user }}>
      {children}
    </CounterContext.Provider>
  )
}

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
