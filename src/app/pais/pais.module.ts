import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPaisComponent } from './list-pais/list-pais.component';
import { DetailPaisComponent } from './detail-pais/detail-pais.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListPaisComponent, DetailPaisComponent ],
  exports: [ListPaisComponent]
})
export class PaisModule { }
