import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatPageRoutingModule } from './chat-routing.module';
import { ChatPage } from './chat.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AudioItemComponent } from './components/audio-item/audio-item.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { TextItemComponent } from './components/text-item/text-item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    SharedModule,
    ScrollingModule
  ],
  declarations: [
    ChatPage,
    TextItemComponent,
    MessageItemComponent,
    ImageItemComponent,
    AudioItemComponent,
    MessageInputComponent,
  ],
  exports: [
    TextItemComponent,
    MessageItemComponent,
    ImageItemComponent,
    AudioItemComponent,
    MessageInputComponent,
  ]
})
export class ChatPageModule {}
