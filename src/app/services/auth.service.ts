import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient , private _Router:Router) {
    if(localStorage.getItem('token') !== null){
      this.DecodedDataMethod()
    }
   }
  UserData = new BehaviorSubject(null)

  SignUpMethod(data: object): Observable<any> {
    return this._HttpClient.post(`https://movies-api.routemisr.com/signup`, data)
  }

  SignInMethod(data: object): Observable<any> {
    return this._HttpClient.post(`https://movies-api.routemisr.com/signin`, data)
  }


  DecodedDataMethod() {
    let encodedToken = JSON.stringify(localStorage.getItem('token'));
    let decodedToken: any = jwtDecode(encodedToken);
    console.log(decodedToken)
    this.UserData.next(decodedToken);
  }


  LogOutMethod(){
    localStorage.removeItem('token')
    this.UserData.next(null)
    this._Router.navigate(['/login'])
  }







}
