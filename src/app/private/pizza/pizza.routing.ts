import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'add',
    loadChildren: () =>
      import('./pages/add/pizza-add.module').then((m) => m.PizzaAddModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/pizza-list.module').then((m) => m.PizzaListModule),
  },
  /*
  {
    path: ':id',
    loadChildren: () =>import('./pages/detail/pizza-detail.module').then( (m) => m.PizzaDetailModule
      ),
  },
  */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/detail/pizza-detail.module').then((m) => m.PizzaDetailModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
