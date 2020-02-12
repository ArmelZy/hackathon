import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterPayload} from "../register-payload";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      username:'',
      email:'',
      password:'',
      confirmPassword:''
    });
    this.registerPayload = {
      username:'',
      email:'',
      password:'',
      confirmPassword:''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerPayload.username = this.registrationForm.get('username').value;
    this.registerPayload.email = this.registerPayload.email = this.registrationForm.get('email').value;
    this.registerPayload.password = this.registrationForm.get('password').value;
    this.registerPayload.confirmPassword = this.registrationForm.get('confirmPassword').value;

    this.authService.register(this.registerPayload).subscribe(data => {
      console.log("register success");
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log("register failed");
    });
  }
}
