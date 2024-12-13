import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CardListRoutingModule } from './card-list-routing.module';
import { CardListComponent } from './card-list.component';
import { PaginationModule } from '../pagination/pagination.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CardListRoutingModule,
        PaginationModule,
    ],
  exports: [
    CardListComponent
  ],
  declarations: [CardListComponent]
})
export class CardListModule {}
