import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  insertSeasonsAvrg(series_: Serie[]): void {
    console.log('Calculando promedio.');
    let sum: number = 0;
    series_.map(s => {sum += s.seasons});
    const avrg: number = sum / series_.length;
    console.log('Desplegando promedio.');
    const table: HTMLElement = document.getElementById('tabla-series')!;
    const html: string = '<p>&nbsp; Seasons average: '+avrg+'</p>';
    table.insertAdjacentHTML('afterend', html);
  }

  ngOnInit() {
    this.getSeries();

    this.insertSeasonsAvrg(this.series);
  }

}
