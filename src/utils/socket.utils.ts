import socketioClient from "socket.io-client"
const ip = require("ip")

export const socket = socketioClient(`http://${ip.address()}:8080`, {
    reconnectionDelay: 1000,
    reconnection: true,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
})

socket.on("server:newmessage",(msg: string)=>{
    console.log(msg);
    
})

export const newMessage = (input: string) => {
    socket.emit("client:message", input)
}