import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {PageEvent} from '@angular/material/paginator';
import { updateNote } from './user.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval, Observable } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class  UsersComponent implements OnInit , OnDestroy{
  subscription: Subscription

  notes: Observable<string[]>
  responseUsers: any=[];
  
  constructor(public userService: UserService ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
  

  ngOnInit() {
      //this.subscription= interval().subscribe(()=>{
       // let notes:any
       // notes=this.userService.getNotes(this.pageSize)
       // this.responseUsers=notes.source._value
       // console.log(this.responseUsers)
      //})


   this.subscription= this.userService.getNotes(this.pageSize).subscribe((data)=>{
     this.responseUsers=data
   })
    
   // this.reload()
     
  }
  
  reload= async ()=>{
    this.subscription= await this.userService.getNotes(this.pageSize).subscribe((data)=>{
      this.responseUsers=data
    })
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
    const note:updateNote = {
      id:id,
      title:title,
      description:description,
      status:"active"
    }
    this.userService.updateNote(note).subscribe(res=>{
      
      
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
    
    this.userService.updateNote(note).subscribe(res=>{
    
      
    }
    )
  }

  Delete(id:string){
      this.userService.deleteNote(id).subscribe(data=>{
       
      }
      )
  }


    
  
  

}
 

