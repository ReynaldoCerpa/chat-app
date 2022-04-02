import socketioClient from "socket.io-client"

export const socket = socketioClient("http://192.168.1.64:8080")