import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  message = '';
  messages: string[] = [];
  constructor(
    private socket: Socket,
    // private util: UtilService,
    // private data: DataService
    ) { }

  ngOnInit() {
    this.socket.connect();
    // this.socket.emit('setUserName', 'rawad');
    this.socket.emit('message', 'rawad is saying hello');
    // this.setUserActivityEvent();

    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push("triggered from server");
    });
  }
  // setUserActivityEvent() {
  //   this.socket.fromEvent('usersActivity').subscribe((data: any) => {
  //     console.log('enterd')
  //     if (data.event === 'chatLeft') {
  //       // this.util.showToast(data.user + ' Left the Chat Room');
  //     } else {
  //       // this.util.showToast(data.user + ' Joined the Chat Room');
  //     }
  //   });
  // }
  sendMessage() {
    this.socket.emit('sendTheMessage', { text: this.message });
    this.message = '';
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

}
