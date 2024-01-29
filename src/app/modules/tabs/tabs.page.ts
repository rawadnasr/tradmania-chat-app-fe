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
        transform: 'translateY(-25px)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class TabsPage {

  constructor() {}

  loginState = 'inactive'; 
  tab2State = 'inactive'; 

  toggleLoginState() {
    this.loginState = (this.loginState === 'inactive') ? 'active' : 'inactive';
    this.tab2State = 'inactive'; 
  }

  toggleTab2State() {
    this.tab2State = (this.tab2State === 'inactive') ? 'active' : 'inactive';
    this.loginState = 'inactive'; 
  }

}

