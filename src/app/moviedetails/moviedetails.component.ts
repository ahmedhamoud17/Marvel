import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {

  MovieId: any
  MovieDetailsContainer: any
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.MovieId = params.get('id')
        console.log(this.MovieId)
      }
    })

    this._MoviesService.GetMovieDetails(this.MovieId).subscribe({
      next: (res) => {
        this.MovieDetailsContainer = res
        console.log(res)
      }
    })
  }


}
