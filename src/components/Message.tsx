import { Text, Container, Spoiler } from '@mantine/core'
import React from 'react'

const Message = ({message , username, ownMessage}: MessageProps) => {

  let alignment = (ownMessage) 
    ? "flex flex-col items-end w-full" 
    : "flex flex-col items-start w-full"
  let bgColor = (ownMessage) 
    ? " break-words max-w-sm bg-ownMessage p-3 rounded-2xl text-white" 
    : " break-words max-w-sm bg-extraMessage p-3 rounded-2xl text-white" 

  return (
      <Container
        fluid
        className="items-end w-full p-3"
      >

        <Container
            fluid
            className={alignment}
        >
            <Text
                size="md"
                className='text-white'
            >{username}</Text>

            <Spoiler 
                maxHeight={120} 
                showLabel="Mostrar más" 
                hideLabel="Hide"
                className={bgColor}
            >
              {message}
            </Spoiler>
        </Container>
      </Container>
  )
}

type MessageProps = {
  message: string,
  username: string,
  ownMessage: boolean,
}

export default Message
