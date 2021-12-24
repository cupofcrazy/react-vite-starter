import React from 'react'
import styled from 'styled-components'

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      { children }
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 1rem 1rem;
  border-radius: .5rem;
`