import { Component, Input, OnInit } from '@angular/core';
import { MessageModeType } from '../../models/type';

@Component({
  selector: 'app-audio-item',
  templateUrl: './audio-item.component.html',
  styleUrls: ['./audio-item.component.scss'],
})
export class AudioItemComponent  implements OnInit {
  @Input() mode?: MessageModeType;
  constructor() { }

  ngOnInit() {}

}
