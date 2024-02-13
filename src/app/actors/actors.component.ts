import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.css'
})
export class ActorsComponent implements OnInit {


  ActorsContainer: any
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.GetActors().subscribe({
      next: (res) => {
        this.ActorsContainer = res.results
        console.log(res)
      }
    })
  }


}
