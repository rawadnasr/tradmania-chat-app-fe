import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ 
    UserAvatarComponent,
    PrimaryHeaderComponent,
  ],
  imports: [IonicModule.forRoot(), ScrollingModule, FormsModule, CommonModule,],
  providers: [],
  bootstrap: [],
  exports: [
    UserAvatarComponent,
    PrimaryHeaderComponent
  ]
})
export class SharedModule { }
