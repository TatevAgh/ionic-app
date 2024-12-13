import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ChartComponent } from './chart.component';
import { ChartRoutingModule } from './chart-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartRoutingModule,
  ],
  exports: [
    ChartComponent
  ],
  declarations: [ChartComponent]
})
export class ChartModule {}
