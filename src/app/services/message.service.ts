import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { SocketService } from './socket.service';
import { IMessage } from '../models/interfaces';
import { apiRoutes } from '../utils/constants/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private httpClientService: HttpClientService,
    private socketService: SocketService
  ) {
   }

  async getMessages() {
    return this.httpClientService
      .get<IMessage[]>(apiRoutes.message.list)
  }

  async createMessage(userId: string, recipientId: string, message: IMessage) {
    this.socketService.sendMessage(userId, recipientId, message)
  }


}
