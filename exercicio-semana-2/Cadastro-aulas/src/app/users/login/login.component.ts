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
    user:'',
    password: ''
  }

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.userService.getLogin()
    .subscribe((data)=>{this.responseUsers= data},  
    erro=>{
      if(erro.status==400){
        alert(erro.error.message)
      }
    }
  )
  }

  login(){
    if(!this.request.user){
      return alert("Digite seu email!")
    }
    if(!this.request.password){
      return alert("Digite sua senha!")
    }
      for(const i of this.responseUsers){
        if(i.user===this.request.user && i.password==this.request.password ){
          return this._route.navigate(['/users'])
        }
      }

      alert("Cadastro não encontrado")

    }


  
//end
}

