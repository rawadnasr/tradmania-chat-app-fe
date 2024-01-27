import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageModeType } from '../../models/type';

@Component({
  selector: 'app-text-item',
  templateUrl: './text-item.component.html',
  styleUrls: ['./text-item.component.scss'],
})
export class TextItemComponent  implements OnInit {

  @Input() mode?: MessageModeType;
  // @Output() evente = new EventEmitter<string>();

  constructor() { 
    // this.text = ''
    console.log('this.mode', this.mode)
  }

  ngOnInit() {
    console.log('this.mode', this.mode)
  }

}
