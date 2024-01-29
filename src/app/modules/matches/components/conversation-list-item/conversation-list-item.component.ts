import { Component, Input, OnInit } from '@angular/core';
import { IConversation, IUser } from 'src/app/models/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conversation-list-item',
  templateUrl: './conversation-list-item.component.html',
  styleUrls: ['./conversation-list-item.component.scss'],
})
export class ConversationListItemComponent implements OnInit {
  
  userName: string = '';
  messageText: string= '';
  createdAt?: string;
  imageUrl: string = '';
  user?: IUser;

  @Input() conversation?: IConversation;

  constructor(private userService: UserService) { 
  }

  async ngOnInit() {
    this.userService.userSubject.subscribe((user) => {
      this.user = user
    });
    const recipient = this.conversation?.participants.filter(participant => participant?.id !== this.user?.id)[0]
    const message = this.conversation?.messages[0]
    this.userName = recipient?.username ?? ''
    this.imageUrl = recipient?.imageUrl ?? ''
    this.messageText = message?.text ?? ''
    this.createdAt = message?.createdAt ?? ''
  }

}
