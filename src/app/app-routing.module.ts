import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, {
    path: 'card-list',
    loadChildren: () => import('./card-list/card-list.module').then(m => m.CardListModule)
  }, {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule)
  }, {
    path: 'pagination',
    loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule)
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
