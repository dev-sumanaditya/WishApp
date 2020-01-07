import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LModalComponent } from '../components/l-modal/l-modal.component';
import { ItemComponent } from '../components/item/item.component';
import { ListComponent } from '../components/list/list.component';
import { NewListModalComponent } from '../components/new-list-modal/new-list-modal.component';
import { LoadingService } from '../services/loading.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    LModalComponent,
    ItemComponent,
    ListComponent,
    NewListModalComponent
  ],
  entryComponents: [
    LModalComponent,
    ItemComponent,
    NewListModalComponent
  ],
})
export class HomePageModule {}
