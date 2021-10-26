import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestCreate } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  request: RequestCreate={
    title: '',
    description:'',
    status:'toDo'
  }

  constructor(private userService: UserService,private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.userService.createNote(this.request).subscribe(data=>{
      console.log(data), alert("Criado com sucesso")
      this._route.navigate(['/users'])
    },
    erro=>{
      if(erro.status==400){
        alert(erro.error.message)
      }
    }
    )
  }

}
