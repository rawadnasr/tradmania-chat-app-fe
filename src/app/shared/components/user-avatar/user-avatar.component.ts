import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  @Input() srcUrl?: string;
  @Input() isOnline?: boolean;
  @Input() isLiked?: boolean;
  constructor() { }

  

}
