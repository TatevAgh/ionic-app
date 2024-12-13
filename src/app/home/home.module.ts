import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardListModule } from '../card-list/card-list.module';
import { ChartModule } from '../chart/chart.module';
import { PaginationModule } from '../pagination/pagination.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        CardListModule,
        ChartModule,
        PaginationModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
