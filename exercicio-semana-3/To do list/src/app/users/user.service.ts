import {HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { RequestCreate, ResponseLogin, ResponseUpdate, ResponseUsers } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public notes$: BehaviorSubject<any> = new BehaviorSubject('');

  private url = "http://localhost:4000"

  constructor(private http: HttpClient, private route: ActivatedRoute, private _route: Router) { }

  public getNotes(page:any){
     this.http.get(`${this.url}/notes?page=1&perPage=${page}`).subscribe((data)=>{
       this.notes$.next(data)
     })
    
    return this.notes$.asObservable()
     
   }


  public createNote(request: ResponseUsers): Observable<RequestCreate>{
    this.getNotes(10)
    return this.http.post<RequestCreate>(`${this.url}/notes`, request);
  }

  public getNote(id: number): Observable<ResponseUsers>{
    this.getNotes(10)
    return this.http.get<ResponseUsers>(`${this.url}/notes/${id}`);
  }

  public updateNote(request:ResponseUpdate ):Observable<any>{
    this.getNotes(10)
    return this.http.put<any>(`${this.url}/notes`, request);
  }

  public deleteNote(id:any):Observable<any>{
    this.getNotes(10)
    return this.http.delete<any>(`${this.url}/notes`, {body: {id}});
  }

  //login

  public getLogin(request: ResponseLogin){
    return this.http.post(`${this.url}/login`, request).subscribe(data=>{
      var token = JSON.parse(JSON.stringify(data)).token
      
      var name = JSON.parse(JSON.stringify(data)).userName
      console.log(data)
      localStorage.setItem("token", token)
      localStorage.setItem("name", name)
      this._route.navigate(['/users'])
    })
  }
  
  public createLogin(request: ResponseLogin): Observable<any>{
    return this.http.post<any>(`${this.url}/users`, request);
  }

  public getAuthorizationToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  
  public removeToken(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }

  
  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } 

    return true;
  }

  //loader
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


}
