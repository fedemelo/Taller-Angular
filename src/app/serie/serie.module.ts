import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listar-series/listar-series.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListarSeriesComponent],
  declarations: [ListarSeriesComponent]
})
export class SerieModule { }
