import { Container } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { socket } from '../utils/socket.utils'
import InputSection from './InputSection'
import Message from './Message'

const MessageContainer = () => {
  const [messageList, setMessageList] = useState([{message: '', username: '', ownMessage: false}])

  useEffect(()=>{
    socket.on("server:newmessage",(msg: any)=>{
      console.log(msg.input);
      let isOwnMessage = (socket.id === msg.id) ? true : false
      setMessageList([...messageList, {message: msg.input, username: msg.username, ownMessage: isOwnMessage}])
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
            return <Message message={msg.message} username={msg.username} ownMessage={msg.ownMessage}/>
          })
          : null
        }
      </Container>
  )
}

export default MessageContainer