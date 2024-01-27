import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  animations: [
    trigger('moveUp', [
      state('inactive', style({
        transform: 'translateY(0)'
      })),
      state('active', style({
        transform: 'translateY(-25px)' // Adjust the distance to move the border up
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class TabsPage {

  constructor() {}

  tab1State = 'inactive'; // Set the initial state for tab1
  tab2State = 'inactive'; // Set the initial state for tab2

  toggleTab1State() {
    this.tab1State = (this.tab1State === 'inactive') ? 'active' : 'inactive';
    this.tab2State = 'inactive'; // Reset the state for other tabs
  }

  toggleTab2State() {
    this.tab2State = (this.tab2State === 'inactive') ? 'active' : 'inactive';
    this.tab1State = 'inactive'; // Reset the state for other tabs
  }

}

