import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actordetails',
  templateUrl: './actordetails.component.html',
  styleUrl: './actordetails.component.css'
})
export class ActordetailsComponent implements OnInit {


  ActorId:any
  ActorDetailsContainer:any

  constructor(private _MoviesService:MoviesService , private _ActivatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params) =>{
        this.ActorId = params.get('id')
      }
    })

    this._MoviesService.GetActorDetails(this.ActorId).subscribe({
      next:(res)=>{
        this.ActorDetailsContainer = res
        console.log(res)
      }
    })
  }

}
