import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { ItemComponent } from '../item/item.component';
import { Subject } from 'rxjs';



interface ListItems {
  listName: string;
  created: string;
  length: number;
  lastUsed: string;
  list: ListItm[],
}

interface ListItm {
  name: String,
  priority: Boolean;
  color: String;
  url: String;
  price: String;
  last: any;
  note: any;
  status: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() data: ListItems;
  @Input() isDis:Subject<any>;

  @Output() arranged = new EventEmitter<any>();

  constructor(private _modal: ModalController, public _loading: LoadingController, private _storage: Storage) { }

  public isDisabled: boolean = true;
  public expanded: boolean = false;

  ngOnInit() {
    this.listItems = this.data.list;
    this.isDis.subscribe(event => {
      this.isDisabled = event;
    })
  }

  public listItems: ListItm[];


  

  async presentItem(itemData) {
    this.presentLoading();

    const item = await this._modal.create({
      component: ItemComponent,
      animated: true,
      mode: "ios",
      componentProps: { 
        data: itemData
      }
    });
    return await item.present();
  }

  async presentLoading() {
    const loading = await this._loading.create({
      duration: 500,
      animated: true,
      spinner: "lines",
      translucent: true,
      mode: "ios"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  onRenderItems(event) {
    let draggedItem = this.listItems.splice(event.detail.from,1)[0];
    this.listItems.splice(event.detail.to,0,draggedItem)
   //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
   event.detail.complete();
   this.isDisabled = true;
   this._storage.set('list', this.listItems);

   this.arranged.emit(this.listItems);
  }

  clickedList(item) {
    this.presentItem(item);
  }


  expandToggle() {
    this.expanded = !this.expanded;
  }
}