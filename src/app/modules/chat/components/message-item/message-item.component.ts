import { Component, Input, OnInit } from '@angular/core';
import { MessageModeType, MessageType } from '../../models/type';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
})
export class MessageItemComponent  implements OnInit {
  @Input() mode?: MessageModeType = 'send';
  @Input() type?: MessageType = 'text';
  constructor() { }

  ngOnInit() {}

}
 