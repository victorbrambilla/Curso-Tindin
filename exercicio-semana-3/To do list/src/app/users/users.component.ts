import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {PageEvent} from '@angular/material/paginator';
import { updateNote } from './user.model';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class  UsersComponent implements OnInit {

  responseUsers: any=[];
  
  constructor(public userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getNotes(this.pageSize)
    .subscribe((data)=>{this.responseUsers= data, console.log(data)}
    
    )
  }
  
  
  

  getName(){
   const name = localStorage.getItem("name")
   return name
  }

  length = 100;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.userService.getNotes(this.pageSize)
    .subscribe((data)=>{this.responseUsers= data}
    
    )
    
    console.log(this.pageIndex)

  }

  Start(id:any, title:any, description:any, status:any ){
    const note:updateNote={
      id:id,
      title:title,
      description:description,
      status:"active"
    }
    this.userService.updateNote(note).subscribe(res=>{
      location.reload()
      
    }
    )
  }

  Completed(id:any, title:any, description:any, status:any ){
    const note:updateNote={
      id:id,
      title:title,
      description:description,
      status:"completed"
    }
    console.log(note)
    
    this.userService.updateNote(note).subscribe(res=>{
      location.reload()
      
    }
    )
  }

  Delete(id:string){
      this.userService.deleteNote(id).subscribe(res=>{
        location.reload()
      }
      )
  }


    
  
  

}
 

