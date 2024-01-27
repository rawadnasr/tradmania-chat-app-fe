import { Component, Input, OnInit } from '@angular/core';
import { SlotType } from 'src/app/shared/models/type';

@Component({
  selector: 'app-conversation-list-item',
  templateUrl: './conversation-list-item.component.html',
  styleUrls: ['./conversation-list-item.component.scss'],
})
export class ConversationListItemComponent {
  
  @Input() name?: string = 'Nancy Ajram';
  @Input() message?: string= 'Hello from conversation listing';
  @Input() time?: string = '12:30';
  @Input() imageUrl?: string = 'https://loremflickr.com/100/100';

  constructor() { }

}
