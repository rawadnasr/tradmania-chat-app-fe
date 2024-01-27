import { Component } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: 'matches.page.html',
  styleUrls: ['matches.page.scss']
})
export class MatchesPage {

  listSize: number = 100;
  items: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  url?: string = "https://loremflickr.com/100/100";
  constructor() { }
}
