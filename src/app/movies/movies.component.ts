import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  MoviesContainer: any
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.GetMovies().subscribe({
      next: (res) => {
        this.MoviesContainer = res.results
        console.log(res)
      }
    })
  }


}
