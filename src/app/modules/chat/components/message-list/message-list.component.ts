import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageModeType, MessageType } from '../../models/type';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  mode: MessageModeType = 'send';
  type: MessageType = 'image';
  listSize: number = 100;
  messages: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // @Output() event = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    // this.event.emit('test')}
  }
}
