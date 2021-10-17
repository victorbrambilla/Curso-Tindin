import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/login/register/register.component';
import { UpdateComponent } from './users/update/update.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/create', component: CreateUserComponent},
  {path: 'users/update/:id', component: UpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
