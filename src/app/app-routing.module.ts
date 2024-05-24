import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPaisComponent } from './list-pais/list-pais.component';
import { DetailPaisComponent } from './detail-pais/detail-pais.component';

const routes: Routes = [
  {
   path: 'list',
   component: ListPaisComponent
 },
 {
   path: ':id',
   component: DetailPaisComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
