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
  notes:any=[];
  
  
 

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router ) {
    
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.userService.getNote(this.id).subscribe(data=>{
      this.notes=data
    
    });
  }

  


  update(){

    const Iupdate:any={

      id:this.notes._id,
      title:this.notes.title,
      description:this.notes.description
    }

    

    this.userService.updateNote( Iupdate).subscribe(res=>{
      alert('Item editado com sucesso')
      this._route.navigate(['/users'])
    }
    )
    
  }
  
  delete(){

      this.userService.deleteNote(this.notes._id).subscribe(res=>{
        alert('Item removido com sucesso')
        this._route.navigate(['/users'])
      }
      )
    };


    
  }


