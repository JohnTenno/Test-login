import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email?: string;
  password?: string;

  constructor(public userService: UsersService, public router: Router) { }
  ngOnInit(): void {
    console.log("raw")
  }
  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error);
      });
  }
}