import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  TrendingMoviesContainer: any
  TrendingActorsContainer: any
  TrendingTvContainer: any
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.GetTrendingMovies().subscribe({
      next: (res) => {
        this.TrendingMoviesContainer = res.results.slice(0, 16)
        console.log(res.results)
      }
    })

    this._MoviesService.GetTrendingPeople().subscribe({
      next: (res) => {
        this.TrendingActorsContainer = res.results.slice(1, 11).reverse()
        console.log(res.results)
      }
    })

    this._MoviesService.GetTrendingTv().subscribe({
      next: (res) => {
        this.TrendingTvContainer = res.results.slice(9, 19)
        console.log(res.results)
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 30,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

}
