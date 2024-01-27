import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
})
export class MessageInputComponent  implements OnInit {

  message: string = '';                

  submitMessage() {
    // call the service of message submission 
     console.log(this.message); 
     this.message = '';
  }

  constructor() { }

  ngOnInit() {}

}
