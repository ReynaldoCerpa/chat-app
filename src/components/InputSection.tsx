import { Avatar, Button, Container, Input, ThemeIcon } from '@mantine/core'
import { IoSend } from "react-icons/io5";
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { newMessage, socket } from '../utils/socket.utils';

const InputSection = () => {
    const [input, setInput] = useState("")


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
                value={input}
                onInput={(e:ChangeEvent<HTMLInputElement>)=>{setInput(e.target.value)}}
                variant='filled'
                className='w-full focus:outline-none'
                placeholder='Ingrese su mensaje' 
                onKeyDown={(e:any) => {
                    if (e.key === "Enter") {
                        newMessage(input)
                        setInput("")
                    }
                }}
            />
            <ThemeIcon
                className='h-9 w-16 cursor-pointer ml-2'
                color="#1c6ed9"
                onClick={()=>{
                    newMessage(input)
                    setInput("")
                }}
            >
                <IoSend
                    className=' text-lg'
                />

            </ThemeIcon>
        </Container>
      </Container>
  )
}

export default InputSection