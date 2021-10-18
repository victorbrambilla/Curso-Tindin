import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseLogin } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  register(){

    for (const i of this.responseUsers){
      console.log(i)
      if(i.user===this.request.user && i.password==this.request.password ){
        return alert("Cadastro existente")
      }
    }

    this.userService.createLogin(this.request).subscribe(data=>{
      alert("Criado com sucesso")
      this._route.navigate([''])
    },
    erro=>{
      if(erro.status==400){
        alert(erro.error.message)
      }
    }
    )
      
  }


}
