import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/service/authentication.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username:['', Validators.required],
            password: ['', Validators.required]
          })
    }
    private title: string = 'Login';
    loginForm: FormGroup;

    get f() { return this.loginForm.controls }
  
  onSubmit() {
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password);
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home'])
    }
  }
}