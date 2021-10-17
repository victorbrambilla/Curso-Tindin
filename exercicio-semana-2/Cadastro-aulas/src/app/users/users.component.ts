import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from './user.model';
import { UserService } from './user.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers: any=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((data)=>{this.responseUsers= data},  
    erro=>{
      if(erro.status==400){
        alert(erro.error.message)
      }
    }
    )
  }

}
