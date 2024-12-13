import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginationRoutingModule,
  ],
  exports: [
    PaginationComponent
  ],
  declarations: [PaginationComponent]
})
export class PaginationModule {}
