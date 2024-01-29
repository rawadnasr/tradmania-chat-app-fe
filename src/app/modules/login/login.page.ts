import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { appRoutes } from 'src/app/utils/constants/appRoutes';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  username: string = '';                

  constructor(
    private userService: UserService,
    private router: Router,
    ) {}

  async submitUsername() {

    this.userService.getOrCreateUser(this.username)
     
    this.userService.userSubject.subscribe((user) => {
      if(user) {
        this.username = '';
        this.router.navigate([appRoutes.matches])
      }
  });
  }

}
