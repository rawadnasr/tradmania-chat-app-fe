import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchesPage } from './matches.page';
import { MatchesPageRoutingModule } from './matches-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConversationListItemComponent } from './components/conversation-list-item/conversation-list-item.component';
import { ConversationListComponent } from './components/conversation-list/conversation-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatchesPageRoutingModule,
    SharedModule,
    ScrollingModule
  ],
  declarations: [
    MatchesPage,
    ConversationListItemComponent, 
    ConversationListComponent
  ]
})
export class MatchesPageModule {}
