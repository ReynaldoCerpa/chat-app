import { Container } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { socket } from '../utils/socket.utils'
import InputSection from './InputSection'
import Message from './Message'

const MessageContainer = () => {

  useEffect(()=>{
  })

  return (
      <Container
        fluid
        padding={0}
        className=' h-full block overflow-y-scroll m-0'
      >
      </Container>
  )
}

export default MessageContainer