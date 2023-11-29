import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilityserviceService } from '../core/utility/utilityservice.service';
import { ApiService } from '../services/service.service';
import { ApiList } from '../core/variable/apiList';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  submitted: boolean = false;
  hidePassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private utilservice: UtilityserviceService,
  ) {
    this.loginForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50),Validators.pattern('^[a-zA-Z0-9_]+$')]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(20),Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`)]]
    })
  }

  get loginControl() {
    return this.loginForm.controls
  }

  login() {
    this.submitted = true
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched()
    }

    let data = this.loginForm.value
    this.apiService.Post(ApiList.login, data).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          localStorage.setItem("authToken", res.token.accessToken);
          localStorage.setItem("username", res.username);
        localStorage.setItem('sessionId',res.sessionId);
        localStorage.setItem(
          'userPermission',
          JSON.stringify(res.token.userPermissions)
        );   
          this.utilservice.successToast(res.message)
          this.router.navigate(['user/list'])
        } else {
          this.utilservice.errorToast(res.message)
        }

      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.utilservice.errorToast(err.message)
      }
    })
  }
}
