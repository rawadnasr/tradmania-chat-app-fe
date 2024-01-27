import { Component, OnInit } from '@angular/core';
import { MessageModeType, MessageType } from './models/type';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  mode: MessageModeType = 'send';
  type: MessageType = 'image';
  listSize: number = 100;
  items: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() { }

  ngOnInit() {
  }

}
