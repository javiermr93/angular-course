import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFake: User = {
    user: 'prueba@prueba.com',
    password: 'Prueba.1234'
  }

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login() {
    if (JSON.stringify(this.loginForm.value) === JSON.stringify(this.userFake)) {
      localStorage.setItem("userLogged", "true");
      this.route.navigate(['/restaurants']);
    }
  }

}
