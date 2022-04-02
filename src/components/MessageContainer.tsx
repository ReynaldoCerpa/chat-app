import { Container } from '@mantine/core'
import React from 'react'
import InputSection from './InputSection'
import Message from './Message'

const MessageContainer = () => {
  return (
      <Container
        fluid
        padding={0}
        m={0}
        className=' h-full block'
      >
          <Message/>
          <Message/>
      </Container>
  )
}

export default MessageContainer