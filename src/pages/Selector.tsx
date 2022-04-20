import React, { ChangeEvent, useState } from 'react';
import { Box, Input, Title } from '@mantine/core';
import { makeSocket, socket } from '../utils/socket.utils';

const Selector: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const [ip, setIp] = useState("")

  return (
    <Box
      className="flex flex-col h-screen bg-gradient-to-r from-blue-700 to-blue-900
								items-center justify-center"
    >
			<Title
				order={2}
				className="text-white"
			>
				Ingrese IP del grupo
			</Title>
			<Input
				placeholder="IP"
        onInput={(e:ChangeEvent<HTMLInputElement>)=>{setIp(e.target.value)}}
				styles={{ input: {width: "50vh", margin: "1rem auto"}}}
				onKeyDown={(e:any) => {
						if (e.key === "Enter") {
							makeSocket(ip)
							socket.emit("connection")
						}
				}}
			/>
    </Box>
  );
};

export default Selector;
