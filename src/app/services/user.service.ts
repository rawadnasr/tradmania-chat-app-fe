import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { apiRoutes } from '../utils/constants/apiRoutes';
import { IConversation, IUser } from '../models/interfaces';
import { SocketService } from './socket.service';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // shared user
  userSubject: ReplaySubject<IUser> = new ReplaySubject<IUser>();
  userConversationsSubject: BehaviorSubject<IConversation[]> = new BehaviorSubject<IConversation[]>([]);


  constructor(
    private httpClientService: HttpClientService,
    private socketService: SocketService
  ) {
    this.socketService.retrieveMessage().subscribe((retrievedMessage: any) => {
      const oldConvs = this.userConversationsSubject.getValue();
      if (retrievedMessage) {
        this.userConversationsSubject.next([...oldConvs, retrievedMessage]);
      }
    })
  }

  // update user
  user(data: IUser) {
    this.userSubject.next(data);
  }

  async getUsers() {
    return this.httpClientService
      .get<IUser[]>(apiRoutes.user.list)
  }

  async getUser(userId: string) {
    return this.httpClientService
      .get<IUser>(apiRoutes.user.get(userId))
  }

  async getUserConversations(userId: string) {
    return this.httpClientService
      .get<IConversation[]>(apiRoutes.user.userConversations(userId))
  }

  async getOrCreateUser(username: string) {
    this.socketService.connect(username)
    this.socketService.setUserEvent().subscribe(retrievedUser => {
      this.user(retrievedUser as IUser);
    });
  }
}
