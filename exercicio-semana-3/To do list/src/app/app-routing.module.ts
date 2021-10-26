import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { CreateNoteComponent } from './users/create-note/create-note.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/login/register/register.component';
import { UpdateComponent } from './users/update/update.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: UsersComponent },
      { path: 'users/create', component: CreateNoteComponent },
      { path: 'users/update/:id', component: UpdateComponent },
    ],
    canActivate: [AuthGuard]
  },

  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'login/register', component: RegisterComponent },
      
    ]
  },
  { path: '**', redirectTo: '' }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
