import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  isLoading: boolean = false;
  ApiError: string = ''
  constructor(private _AuthService: AuthService, private _ToastrService: ToastrService, private _Router: Router) { }

  RegisterForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z]).{8,25}$/)]),
    age: new FormControl(null, [Validators.required, Validators.min(15)]),
  })


  HandleRegister(RegisterForm: FormGroup) {
    this.isLoading = true
    this._AuthService.SignUpMethod(RegisterForm?.value).subscribe({
      next: (res) => {
        this.isLoading = false
        console.log(res)
        if (res?.message === "success") {
          this.SuccessToastr();
          this._Router.navigate(['/login'])
        }
        else {
          this.ApiError = res.errors.email.message
          this.ErrorToastr();
        }
      },
      error: (err) => {
        this.isLoading = false
        console.log(err)
      },
      complete: () => { console.log('SignUp Method Completed') }
    })
  }

  SuccessToastr() {
    this._ToastrService.success('Account Registered Successfully')
  }
  ErrorToastr() {
    this._ToastrService.error('Account Registered Failed')
  }

}
