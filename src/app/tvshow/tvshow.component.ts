import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrl: './tvshow.component.css'
})
export class TvshowComponent implements OnInit {

  TvContainer: any
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.GetTvSeries().subscribe({
      next: (res) => {
        this.TvContainer = res.results
        console.log(res)
      }
    })
  }

}
