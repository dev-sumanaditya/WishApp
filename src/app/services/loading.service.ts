import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public _loading: LoadingController) { }

  public isOpen: boolean = false;

  async present() {
      const loading = await this._loading.create({
        animated: true,
        spinner: "lines",
        translucent: true,
        mode: "ios"
      });
      await loading.present().then(() => {
        console.log('presented')
        this.isOpen = true;
      });
  }

  async dismiss() {
      console.log('dismissing');
      await setTimeout(() => {
         this._loading.dismiss().then(() => {
          console.log('dismissed');
        });
      }, 1000);
  }
}
