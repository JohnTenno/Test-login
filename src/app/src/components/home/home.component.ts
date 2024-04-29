import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public userService: UsersService) { }
  ngOnInit() {
    console.log("tesde d home")
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }
}
