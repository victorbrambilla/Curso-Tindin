import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseUpdate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  id: any
  classes:any=[];
  idDelete:any=[]
  

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router ) {
    
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.userService.getUser(this.id).subscribe(data=>{
      this.classes=data
    });
  }

  update(){
    

    this.userService.updateUser( this.classes[0]).subscribe(res=>{
      alert('Item editado com sucesso')
    },
    erro=>{
      if(erro.status==400){
        alert(erro.error.message)
      }
    }
    )
    
  }
  
  delete(){
    this.id=this.route.snapshot.paramMap.get('id')
    this.userService.getUser(this.id).subscribe(data=>{
      this.idDelete=data,

      this.userService.deleteUser(this.idDelete[0].id).subscribe(res=>{
        alert('item Removido com sucesso')
        this._route.navigate(['/users'])
      },
      erro=>{
        if(erro.status==400){
          alert(erro.error.message)
        }
      }
      )
    });


    
  }

}
