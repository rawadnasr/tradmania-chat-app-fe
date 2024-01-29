import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConversation, IMatch, IUser } from 'src/app/models/interfaces';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-matches',
  templateUrl: 'matches.page.html',
  styleUrls: ['matches.page.scss']
})
export class MatchesPage implements OnInit {
  user?: IUser;
  users?: IUser[];
  matches?: IMatch[];
  matchesCount: number = this.matches?.length ?? 0;
  conversations?: IConversation[];
  conversationsCount: number = this.conversations?.length ?? 0;

  constructor(
    private userService: UserService,
    private matchService: MatchService,
    private router: Router,
  ) {
  }

  async ngOnInit() {
    this.userService.userSubject.subscribe((user) => {
      this.user = user
    });

    (await this.userService.getUsers()).subscribe((users: any) => this.users = users.filter((user: any) => user?.id !== this.user?.id));

    (await this.matchService.getUserMatches()).subscribe((matches) => this.matches = matches);

    if (this.user?.id) (await this.userService.getUserConversations(this.user.id)).subscribe((conversations: any) => {
      this.userService.userConversationsSubject.next(conversations)
      this.conversations = conversations
    });

  }


  getRecipientId(conversation: IConversation) {
    return conversation.participants.filter(participant => participant.id !== this.user?.id)[0]?.id
  }

  navigateToChat(recipientId?: string, conversationId?: string) {
    const data = {} as any;
    if (recipientId) data.recipientId = recipientId
    if (conversationId) data.conversationId = conversationId
    const stringifiedData = JSON.stringify(data);
    this.router.navigate(['/chat'], { queryParams: { data: stringifiedData } })
  }
}
