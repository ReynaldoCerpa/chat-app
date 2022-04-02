import socketioClient from "socket.io-client"

export const socket = socketioClient("http://localhost:8080")