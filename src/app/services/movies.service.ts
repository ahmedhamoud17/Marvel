import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  private apiUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  private apiUrl2 = 'https://api.themoviedb.org/3/trending/person/week?language=en-US';
  private apiUrl3 = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';


  constructor(private _HttpClient: HttpClient) { }

  GetTrendingMovies(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get(this.apiUrl, { headers: headers })
  }

  GetTrendingPeople(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get(this.apiUrl2, { headers: headers })
  }

  GetTrendingTv(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get(this.apiUrl3, { headers: headers })
  }

  GetMovieDetails(movieId:any): Observable<any>{

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US` , {headers:headers})
  }

  GetTvDetails(TvId:any): Observable<any>{

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${TvId}?language=en-US` , {headers:headers})
  }
  GetActorDetails(actorId:any): Observable<any>{

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${actorId}?language=en-US` , {headers:headers})
  }

  GetMovies(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', { headers: headers })
  }

  GetTvSeries(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', { headers: headers })
  }

  GetActors(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGYwNWY1ZTVkNmUxNjhlMjMzMTc3OTQyNWNjYzFmZSIsInN1YiI6IjY1YzIwZWU3ZmM1ZjA2MDE4OWM1MGU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ZnhfcQzsojJZRaz_P41wgqplOGM0uskWwAZNbILw', // Replace with your actual access token
      'accept': 'application/json',
    });

    return this._HttpClient.get('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', { headers: headers })
  }


}
