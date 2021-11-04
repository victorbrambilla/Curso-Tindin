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
      { path: '', component: UsersComponent,data: {depth: 1} },
      { path: 'users/create', component: CreateNoteComponent, data: {depth: 2}},
      { path: 'users/update/:id', component: UpdateComponent, data: {depth: 2} },
    ],
    canActivate: [AuthGuard]
  },

  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent,data: {depth: 1} },
      { path: 'login/register', component: RegisterComponent,data: {depth: 2} },
      
    ]
  },
  { path: '**', redirectTo: '' }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
