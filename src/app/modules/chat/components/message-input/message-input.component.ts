import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
})
export class MessageInputComponent {

  message: string = '';  
  
  @Output() submitEvent = new EventEmitter<string>();

  constructor() {  }

  submitMessage() {
    this.submitEvent.emit(this.message);
    this.message = '';
 }
}
