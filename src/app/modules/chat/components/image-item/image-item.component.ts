import { Component, Input, OnInit } from '@angular/core';
import { MessageModeType } from '../../models/type';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
})
export class ImageItemComponent  implements OnInit {
  @Input() mode?: MessageModeType;
  constructor() { }

  ngOnInit() {}

}
