import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-list-modal',
  templateUrl: './new-list-modal.component.html',
  styleUrls: ['./new-list-modal.component.scss'],
})
export class NewListModalComponent implements OnInit, AfterViewInit {

  constructor(public _loading: LoadingService, public _modal: ModalController) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._loading.dismiss();
  }

  public dismiss() {
    this._modal.dismiss();
  }
}
