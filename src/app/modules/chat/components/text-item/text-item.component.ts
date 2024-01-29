import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageModeType } from '../../models/type';

@Component({
  selector: 'app-text-item',
  templateUrl: './text-item.component.html',
  styleUrls: ['./text-item.component.scss'],
})
export class TextItemComponent  implements OnInit {

  @Input() mode?: MessageModeType;
  @Input() text?: string;

  constructor() { 
  }

  ngOnInit() {
  }

}
