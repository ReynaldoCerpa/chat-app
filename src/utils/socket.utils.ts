import socketioClient from "socket.io-client"
const ip = require("ip")

export const socket = socketioClient(`http://192.168.1.64:8080`, {
    reconnectionDelay: 1000,
    reconnection: true,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
})


export const newMessage = (input: string) => {
    socket.emit("client:message", input)
}