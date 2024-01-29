import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { socketioEvents } from '../utils/constants/socketioEvents';
import { IMessage } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private socket: Socket,
  ) {

   }

  connect(username: string) {
    this.socket.connect();
    if (username) this.socket.emit(socketioEvents.setUsername, username);
  }

  setUserEvent() {
    return this.socket.fromEvent(socketioEvents.getUser)
  }

  sendMessage(senderId: string, recpientId: string, message: IMessage) {
    return this.socket.emit(socketioEvents.addMessage, message, senderId, recpientId)
  }

  retrieveMessage() {
    return this.socket.fromEvent(socketioEvents.retrieveMessage)
  }

  disconnect() {
    this.socket.disconnect();
  }

  // ionViewWillLeave() {
  //   this.socket.disconnect();
  // }
}
