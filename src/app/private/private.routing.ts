import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';


const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'header',
        loadChildren: () => import('./header/header.module').then(m => m.HeaderModule),
   }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
