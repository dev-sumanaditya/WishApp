import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-l-modal',
  templateUrl: './l-modal.component.html',
  styleUrls: ['./l-modal.component.scss'],
})
export class LModalComponent implements OnInit, AfterViewInit {


  constructor(public _modal: ModalController, private _fb: FormBuilder, public loading: LoadingController, public loading2: LoadingService) {
    this.item = this._fb.group({
      name: ['', Validators.required],
      price: [''],
      url: ['']
    })
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.loading2.dismiss();
  }


  public item: FormGroup;
  public currentPos: number = 0;
  public datePicked: boolean = false;
  customPickerOptions = {
    backdropDismiss: false
  }
  logForm(){
    console.log(this.item.value);
    this.Next();
  }
 
  Next(){
    this.currentPos++;
  }
  Next2(){
    this.currentPos += 2;
  }

  dismiss() {
    this._modal.dismiss({
      'dismissed': true
    });
  }

  selectedDate(event) {
    this.datePicked = true;
  }

}
