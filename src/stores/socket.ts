import { defineStore } from 'pinia'
import { io } from 'socket.io-client'
import type { Socket } from 'socket.io-client'
import { reactive } from 'vue'
const path = 'http://localhost:3000/'

export interface JoinRoomFunction {
  status: number
  id: string
}

export const useSocketServerStore = defineStore('socketServer', () => {
  // const socket = reactive<Socket>(io(path))
  // socket.on('connected', (idSocket) => {
  //   console.log(idSocket);
  // })
  // function joinRoom(roomId: string) {
  //   return socket.emit('join room', roomId);
  // }
  // function onJoinRoom(fn: (data: JoinRoomFunction) => void) {
  //   return socket.on('join room', (data) => fn(data))
  // }

  // return {
  //   joinRoom,
  //   onJoinRoom
  // }
})
