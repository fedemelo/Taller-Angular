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
  avrg: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;

      let sum: number = 0;
      series.map(s => {sum += s.seasons});
      this.avrg = sum/series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
