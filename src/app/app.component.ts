import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/service/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Login';
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls }
  
  onSubmit() {
    this.authenticationService.login('vijay', 'felix');
    console.log(this.loginForm.value, 'came in');
  }
}
