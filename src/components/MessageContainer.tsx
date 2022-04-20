import { Container } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { socket } from '../utils/socket.utils'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { MessageObject } from '../interfaces/interfaces'
import Message from './Message'
import { PythonShell } from "python-shell"

const MessageContainer = () => {
  let i = 0;
  const [messageList, setMessageList] = useState([{message: '', username: '', ownMessage: false}])

  useEffect(()=>{
    socket.on("server:newmessage",(msg: any)=>{
      let isOwnMessage = (socket.id === msg.id) ? true : false
      
      let options = {
          scriptPath: 'src/utils/scripts/',
          args: [msg.input]
      };

		PythonShell.run('decrypt.py', options, function(err, results:any){
			if(err) throw err;
      let decrypted = results
      
      setMessageList([...messageList, {message: decrypted, username: msg.username, ownMessage: isOwnMessage}])
		})
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
              return <Message key={i++} message={msg.message} username={msg.username} ownMessage={msg.ownMessage}/>
            }
          })
        }
      </Container>
  )
}

export default MessageContainer
