import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
})
export class HorizontalListComponent {
  items: any[] = [];
  chunkSize = 10;

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  

  constructor() {
    this.loadMore();
  }

  loadMore() {
    // Simulating loading more items
    for (let i = 0; i < this.chunkSize; i++) {
      this.items.push({ text: `Item ${this.items.length + 1}` });
    }

    // Complete the infinite scroll when reaching the end
    if (this.items.length >= 50) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
    }
  }
}
