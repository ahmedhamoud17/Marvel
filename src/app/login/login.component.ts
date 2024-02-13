import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading: boolean = false
  ApiError: string = ''
  constructor(private _AuthService: AuthService, private _Router: Router, private _ToastrService: ToastrService) { }

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z]).{8,25}$/)]),
  })

  HandleLogin(LoginForm: FormGroup) {
    this.isLoading = true
    this._AuthService.SignInMethod(LoginForm.value).subscribe({
      next: (res) => {
        this.isLoading = false
        if (res.message === "success") {
          localStorage.setItem('token', res.token)
          this._AuthService.DecodedDataMethod();
          this.SuccessToastr()
          this._Router.navigate(['/home'])
        }
        else {
          this.ErrorToastr()
          this.ApiError = res.message
        }
      }
    })
  }


  SuccessToastr() {
    this._ToastrService.success('Account Sign In Successfully')
  }
  ErrorToastr() {
    this._ToastrService.error('Account Sign In Failed')
  }


}
