import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrl: './tvdetails.component.css'
})
export class TvdetailsComponent implements OnInit{


  TvId:any
  TvDetailsContainer:any
  constructor(private _MoviesService:MoviesService , private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.TvId = params.get('id')
        console.log(this.TvId)
      }
    })

    this._MoviesService.GetTvDetails(this.TvId).subscribe({
      next:(res)=>{
        this.TvDetailsContainer = res
        console.log(this.TvDetailsContainer)
      }
    })
  }



}
