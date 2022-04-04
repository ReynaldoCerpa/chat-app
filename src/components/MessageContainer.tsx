import { Container } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { socket } from '../utils/socket.utils'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { MessageObject } from '../interfaces/interfaces'
import Message from './Message'

const MessageContainer = () => {
  const response = useSelector((state: RootStateOrAny)=>state)
  const [messageList, setMessageList] = useState([])
  const dispatch = useDispatch();
  const addMessage = (message: MessageObject) => {
      dispatch({type: "ADD_MESSAGE", payload: message})
  }
  let keys = 0;

  socket.on("server:newmessage",(msg: any)=>{
      let isOwnMessage = (socket.id === msg.id) ? true : false
      addMessage({message: msg.input, username: msg.username, ownMessage: isOwnMessage})
      setMessageList(response)
  })

  return (
      <Container
        fluid
        padding={0}
        className=' h-full block overflow-y-scroll  m-0'
      >
        {
          messageList.slice(1).map((msg: MessageObject)=>{
            if(msg.username !== ''){
              return <Message key={keys++} message={msg.message} username={msg.username} ownMessage={msg.ownMessage}/>
            }
          })
        }
      </Container>
  )
}

export default MessageContainer