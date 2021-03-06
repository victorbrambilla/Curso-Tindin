import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseLogin } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseUsers: any=[];
  request: ResponseLogin={
    email:'',
    password: ''
  }

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
     
  }

  login(){
    if(!this.request.email){
      return alert("Digite seu email2!")
    }
    if(!this.request.password){
      return alert("Digite sua senha!")
    }

    this.userService.getLogin(this.request)
    .subscribe((data)=>{console.log(data)},  
    erro=>{
      if(erro.status==400){
        alert(erro.error.message)
      }
    }
  )



    }


  
//end
}

