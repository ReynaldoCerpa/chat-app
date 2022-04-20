import socketioClient, { Socket } from "socket.io-client"
const ip = require("ip")
const os = require("os")

export let socket: Socket;
export function makeSocket(ip: string){
	const socket = socketioClient(ip, {
			reconnectionDelay: 1000,
			reconnection: true,
			transports: ['websocket'],
			agent: false,
			upgrade: false,
			rejectUnauthorized: false
	})

}




export const newMessage = (input: string) => {
    socket.emit("client:message", {input: input, username: os.userInfo().username, id: socket.id})
}
