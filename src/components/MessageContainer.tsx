import { Container } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { socket } from '../utils/socket.utils'
import InputSection from './InputSection'
import Message from './Message'

const MessageContainer = () => {
  const [messageList, setMessageList] = useState([{message: '', username: ''}])

  useEffect(()=>{
    socket.on("server:newmessage",(msg: string)=>{
      console.log(msg);
      setMessageList([...messageList, {message: msg, username: "Reynaldo"}])
    })
  })

  return (
      <Container
        fluid
        padding={0}
        className=' h-full block overflow-y-scroll m-0'
      >
        {messageList.length > 1 ?
          messageList.slice(1).map((msg)=>{
            return <Message message={msg.message} username={msg.username} />
          })
          : null
        }
      </Container>
  )
}

export default MessageContainer