import { Container } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { socket } from '../utils/socket.utils'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import Message from './Message'
import { MessageObject } from '../interfaces/interfaces'

const MessageContainer = () => {
  const messageList = useSelector((state: RootStateOrAny)=>state)
  const dispatch = useDispatch();
  let keys = 0;

  const addMessage = (message: MessageObject) => {
    dispatch({type: "ADD_MESSAGE", payload: message})
  }

  useEffect(()=>{
    console.log("Rendered");
    
    socket.on("server:newmessage",(msg: any)=>{
      console.log(msg.input);
      let isOwnMessage = (socket.id === msg.id) ? true : false
      addMessage({message: msg.input, username: msg.username, ownMessage: isOwnMessage})
      console.log(messageList);
      
    })
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