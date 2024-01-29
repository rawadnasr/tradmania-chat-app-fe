import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IConversation } from '../models/interfaces';
import { apiRoutes } from '../utils/constants/apiRoutes';
import { HttpClientService } from './http-client.service';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  conversationMessagesSubject: BehaviorSubject<IConversation> = new BehaviorSubject<IConversation>({} as IConversation);
  constructor(
    private httpClientService: HttpClientService,
    private socketService: SocketService
  ) {
    this.socketService.retrieveMessage().subscribe((retrievedMessage) => {
      const conversationMessages = this.conversationMessagesSubject.getValue()
      if (retrievedMessage) {
        conversationMessages.messages.push(retrievedMessage)
        this.conversationMessagesSubject.next(conversationMessages);
      }
    })
  }

  async getConversationMessages(conversationId: string) {
    return this.httpClientService
      .get<IConversation>(apiRoutes.conversation.get(conversationId))
  }
}
