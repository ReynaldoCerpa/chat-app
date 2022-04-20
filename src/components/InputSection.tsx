import { Container, Input, ThemeIcon } from '@mantine/core'
import { IoSend } from "react-icons/io5";
import React, { ChangeEvent, useState } from 'react'
import { newMessage } from '../utils/socket.utils';
import { PythonShell } from "python-shell"

const InputSection = () => {
  const [input, setInput] = useState("")

	const encrypt = (message: string) =>{
        let options = {
            scriptPath: 'src/utils/scripts/',
            args: [message]
        };

		PythonShell.run('encrypt.py', options, function(err, results:any){
			if(err) throw err;
            newMessage(results.toString())
		})
	}



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
                        encrypt(input)
                        setInput("")
                    }
                }}
            />
            <ThemeIcon
                className='h-9 w-16 cursor-pointer ml-2'
                color="#1c6ed9"
                onClick={()=>{
                    encrypt(input)
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
