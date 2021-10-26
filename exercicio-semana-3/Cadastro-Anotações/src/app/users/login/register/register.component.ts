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
    name:'',
    email:'',
    password: ''
  }

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    
  }

  register(){
    if(!this.request.password){
      return alert("digite sua senha!")
    }

    this.userService.createLogin(this.request).subscribe(data=>{
      alert("Cadastro criado com sucesso")
      this._route.navigate([''])
    }
    )
      
  }


}
