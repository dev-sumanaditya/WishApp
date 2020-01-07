import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalController, LoadingController } from '@ionic/angular';
import { LModalComponent } from '../components/l-modal/l-modal.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NewListModalComponent } from '../components/new-list-modal/new-list-modal.component';
import { LoadingService } from '../services/loading.service';


interface ListItems {
  listName: string;
  created: string;
  length: number;
  lastUsed: string;
  list: ListItm[];
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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public isDis: Subject<any> = new Subject();
  public isDisabled = true;

  public note = "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scr";

  public listItems: ListItm[];

  public wishList: ListItems[];

  constructor(private _modal: ModalController, public _loading: LoadingController, public _loadingService: LoadingService) {
    this.listItems = [
      {
        name: "Bag",
        priority: false,
        color: "success",
        url: "https://www.google.com",
        price: "2,400",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Leather Wallet",
        priority: false,
        color: "secondary",
        url: "https://www.google.com",
        price: "3,999",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "White Sneakers    dddddddddddddddddddddddddddddd",
        priority: true,
        color: "danger",
        url: "https://www.google.com",
        price: "5,2000000000000000000000000000000000000",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Galaxy S10",
        priority: false,
        color: "warning",
        url: "https://www.google.com",
        price: "80,000",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Leather Jacket",
        priority: false,
        color: "success",
        url: "https://www.google.com",
        price: "4,900",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Leather Wallet",
        priority: false,
        color: "secondary",
        url: "https://www.google.com",
        price: "3,999",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "White Sneakers    dddddddddddddddddddddddddddddd",
        priority: true,
        color: "danger",
        url: "https://www.google.com",
        price: "5,2000000000000000000000000000000000000",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Galaxy S10",
        priority: false,
        color: "warning",
        url: "https://www.google.com",
        price: "80,000",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Leather Jacket",
        priority: false,
        color: "success",
        url: "https://www.google.com",
        price: "4,900",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Leather Wallet",
        priority: false,
        color: "secondary",
        url: "https://www.google.com",
        price: "3,999",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "White Sneakers    dddddddddddddddddddddddddddddd",
        priority: true,
        color: "danger",
        url: "https://www.google.com",
        price: "5,2000000000000000000000000000000000000",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Galaxy S10",
        priority: false,
        color: "warning",
        url: "https://www.google.com",
        price: "80,000",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Leather Jacket",
        priority: false,
        color: "success",
        url: "",
        price: "4,900",
        last: "",
        note: this.note,
        status: 'High'
      },
      {
        name: "Leather Wallet",
        priority: false,
        color: "secondary",
        url: "",
        price: "3,999",
        last: "",
        note: this.note,
        status: 'High'
      }
    ];

    this.wishList = [
      {
        listName: 'Shopping List',
        created: '3 months ago',
        length: 10,
        lastUsed: '2 days ago',
        list: this.listItems,
      },
      {
        listName: 'Travel List',
        created: '3 months ago',
        length: 10,
        lastUsed: '2 days ago',
        list: this.listItems,
      },
      {
        listName: 'My Bucket List',
        created: '3 months ago',
        length: 10,
        lastUsed: '2 days ago',
        list: this.listItems,
      }
    ];
  }

  async presentLoading() {
    this._loadingService.present();
  }
  
  async presentModal() {
    this.presentLoading();

    const modal = await this._modal.create({
      component: LModalComponent,
      animated: true,
      mode: "ios",
    });
    return await modal.present();
  }

  async presentNewListModal() {
    this.presentLoading();

    const newListModal = await this._modal.create({
      component: NewListModalComponent,
      animated: true,
      mode: "ios",
    })
    return await newListModal.present();
  }

  reorder() {
    this.isDisabled = false;
    this.isDis.next(false);
  }
  arranged() {
    this.isDisabled = true;
    this.isDis.next(true);
  }

  arrangedHandler(event) {
    this.isDisabled = true;
    this.isDis.next(true);
    console.log(event);
  }
}
