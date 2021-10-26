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
    this.userService.getNote(this.id).subscribe(data=>{
      this.classes=data
    
    });
  }

  


  update(){

    const Iupdate:any={

      id:this.classes._id,
      title:this.classes.title,
      description:this.classes.description
    }

    

    this.userService.updateNote( Iupdate).subscribe(res=>{
      alert('Item editado com sucesso')
      this._route.navigate(['/users'])
    }
    )
    
  }
  
  delete(){
    this.id=this.route.snapshot.paramMap.get('id')
    this.userService.getNote(this.id).subscribe(data=>{
      this.idDelete=data,
      
      this.userService.deleteNote(this.idDelete._id).subscribe(res=>{
        alert('Item removido com sucesso')
        this._route.navigate(['/users'])
      }
      )
    });


    
  }

}
