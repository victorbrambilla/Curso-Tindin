import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/auth.guard';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logout(){
    this.userService.removeToken()
  }

}
