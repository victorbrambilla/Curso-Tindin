import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class  UsersComponent implements OnInit {

  user: any= localStorage.getItem("name")
  avatar: any= localStorage.getItem("avatar")
  
  
  newMessage: any={
    name:this.user,
    user: this.avatar,
    message:'',
    
    file:File
  }

  users:any={
    name: this.user,
    avatar: this.avatar
  }

  messageList: any[] = [];
  userlist: any[]=[];
  
  constructor(public userService: UserService ) { }

  ngOnInit(): void {
    

    this.userService.getNewMessage().subscribe((message: string) => {
      this.messageList.splice(0, this.messageList.length)
      this.messageList.push(message);
      
      
    })

    this.userService.getUsers().subscribe((users:string)=>{
      this.userlist.splice(0, this.userlist.length)
      this.userlist.push(users);
      
    })

    this.userService.sendUser(this.users)
    console.log(this.messageList)
    
    this.scroll()
     
  }
  
  scroll(){
    setTimeout(()=>{
      const ul= document.querySelector('.list-messages')
      ul!.scrollTop=ul!.scrollHeight
    },100)

  }



  sendMessage() {
    
    this.newMessage.date=this.userService.getDateTime(new Date())
    this.userService.sendMessage(this.newMessage);
    this.newMessage.message = '';
    this.scroll() 
  }
  
  

  

  onFileSelected(event:any){
    
    this.newMessage.file=event.target.files[0];

    this.userService.postPhoto(this.newMessage).subscribe()
    this.newMessage.message = '';
    setTimeout(()=>{
      location.reload()
    },500)
}

}

