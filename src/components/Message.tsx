import { Text, Container, Spoiler } from '@mantine/core'
import React from 'react'

const Message = ({message , username}: MessageProps) => {
  return (
      <Container
        fluid
        className="items-end w-full p-3"
      >

        <Container
            fluid
            className="flex flex-col items-end w-full"
        >
            <Text
                size="md"
            >{username}</Text>

            <Spoiler 
                maxHeight={120} 
                showLabel="Mostrar más" 
                hideLabel="Hide"
                className=" break-words max-w-md bg-yellow-100 p-3 rounded-2xl"
            >
              {message}
            </Spoiler>
        </Container>
      </Container>
  )
}

type MessageProps = {
  message: string,
  username: string
}

export default Message
