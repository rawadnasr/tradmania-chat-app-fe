import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HorizontalListComponent } from './components/horizontal-list/horizontal-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { FormsModule } from '@angular/forms';
import { VerticalScrollingListComponent } from './components/vertical-scrolling-list/vertical-scrolling-list.component';

@NgModule({
  declarations: [
    HorizontalListComponent, 
    UserAvatarComponent,
    PrimaryHeaderComponent,
    VerticalScrollingListComponent
  ],
  imports: [IonicModule.forRoot(), ScrollingModule, FormsModule],
  providers: [],
  bootstrap: [],
  exports: [
    HorizontalListComponent,
    UserAvatarComponent,
    PrimaryHeaderComponent,
    VerticalScrollingListComponent
  ]
})
export class SharedModule { }
