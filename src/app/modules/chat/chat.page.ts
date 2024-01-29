import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { IConversation, IMessage, IUser } from 'src/app/models/interfaces';
import { ConversationService } from 'src/app/services/conversation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  recipientId: string = ''
  conversationId: string = '';
  user: IUser = {} as IUser;
  conversation?: IConversation;
  messages?: IMessage[];
  messagesCount?: number = 100;
  recipient?: IUser;

  constructor(
    private userService: UserService,
    private conversationService: ConversationService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.userService.userSubject.subscribe((user) => {
      this.user = user
    });

    this.route.queryParams.subscribe(params => {
      const stringifiedData = params['data'];
      const data = JSON.parse(stringifiedData);
      if (data?.recipientId) this.recipientId = data.recipientId
      if (data?.conversationId) this.conversationId = data.conversationId
    });
    if (this.conversationId) this.getConversation(this.conversationId)
    else (await this.userService.getUser(this.recipientId)).subscribe((recipient: any) => this.recipient = recipient)
  }

  async getConversation(conversationId: string) {
    (await this.conversationService.getConversationMessages(conversationId)).subscribe((conversation: any) => {
      this.conversationService.conversationMessagesSubject.next(conversation)
      this.conversation = conversation
      this.init(conversation)
    })
  }

  async init(conversation: IConversation) {
    this.messages = conversation && conversation.messages
    this.messagesCount = (this.messages && this.messages?.length) ?? 0
    this.recipient = conversation && conversation.participants.filter(participant => participant?.id !== this.user?.id)[0]
  }

  sendMessage(text: string) {
    const message: IMessage = {
      text,
      type: 'text',
      userId: this.user?.id,
      conversation: this.conversation
    }
    this.messageService.createMessage(this.user?.id, this.recipient?.id ?? '', message)
  }

}
