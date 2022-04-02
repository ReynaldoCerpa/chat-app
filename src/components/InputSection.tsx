import { Avatar, Button, Container, Input, ThemeIcon } from '@mantine/core'
import { IoSend } from "react-icons/io5";
import React from 'react'
import { socket } from '../utils/socket.utils';

const InputSection = () => {
  return (
      <Container
        fluid
        m={0} padding={0} 
        className=' h-14 flex items-center px-5'
      >
        <Container
            fluid
            m={0} padding={0} 
            className='flex w-full'
        >
            <Input
                variant='filled'
                className='w-full focus:outline-none'
                placeholder='Ingrese su mensaje' 
            />
            <ThemeIcon
                className='h-9 w-16 cursor-pointer ml-2'
                color="#1c6ed9"
                onClick={()=>{console.log("Hola")}}
            >
                <IoSend
                    className=' text-lg'
                    onClick={()=>{
                        socket.emit("client:message")
                        socket.on("server:newmessage", (msg) => {
                            console.log(msg);
                          })
                    }}
                />

            </ThemeIcon>
        </Container>
      </Container>
  )
}

export default InputSection