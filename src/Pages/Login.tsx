import React from 'react'
import { Container , Input } from '@mui/material'

export const Login = () => {
  return (
    <Container sx={{border : '1px solid gray'}}>
        <form>
            <Input fullWidth placeholder='email' />
            <Input fullWidth placeholder='password' />
        </form>
    </Container>
  )
}
