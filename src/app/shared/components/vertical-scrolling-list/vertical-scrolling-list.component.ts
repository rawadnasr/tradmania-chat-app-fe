import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-scrolling-list',
  templateUrl: './vertical-scrolling-list.component.html',
  styleUrls: ['./vertical-scrolling-list.component.scss'],
})
export class VerticalScrollingListComponent  implements OnInit {

  items: any[] = [1,2,3,4,5,6,7,8,9];
  chunkSize = 10;
  constructor() { }

  ngOnInit() {}

}
