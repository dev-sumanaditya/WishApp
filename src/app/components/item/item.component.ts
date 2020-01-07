import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  constructor(public _modal: ModalController, private iab: InAppBrowser) { }

  data;

  ngOnInit() {}

  openUrl() {
    const url = this.data.url;
    const browser = this.iab.create(url,'_self',{location:'no'});
    browser.show();
  }

  close() {
      this._modal.dismiss({
        'dismissed': true
      });
  }

}
