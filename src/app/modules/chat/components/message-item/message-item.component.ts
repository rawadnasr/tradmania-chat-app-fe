import { Component, Input } from '@angular/core';
import { MessageModeType, MessageType } from '../../models/type';
import { IMessage } from 'src/app/models/interfaces';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
})
export class MessageItemComponent {
  @Input() message?: IMessage;
  @Input() mode?: MessageModeType = 'sender';
  @Input() type?: MessageType = 'text';
  constructor() { }

}
 