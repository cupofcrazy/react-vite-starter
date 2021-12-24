import { useState } from 'react'
import styled from 'styled-components'
import { mq } from '../utils'
import { Button } from './Button'

function App() {
  const [count, setCount] = useState(0)
  const increment = (inc) => setCount((prev) => prev + inc)

  return (
    <Container>
      <Button onClick={() => increment(2)}>Increment Count +{count}</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media ${mq.tablet} {
    background-color: #111;
  }

`

export default App
