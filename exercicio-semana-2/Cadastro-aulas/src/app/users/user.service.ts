import {HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { RequestCreate, ResponseLogin, ResponseUpdate, ResponseUsers } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private url = "http://localhost:4000"

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(`${this.url}/notes`);
  }


  public createUser(request: ResponseUsers): Observable<RequestCreate>{
    return this.http.post<RequestCreate>(`${this.url}/notes`, request);
  }

  public getUser(id: number): Observable<ResponseUsers>{
     
    return this.http.get<ResponseUsers>(`${this.url}/notes/${id}`);
  }

  public updateUser(request: ResponseUpdate):Observable<ResponseUpdate>{
    return this.http.put<ResponseUpdate>(`${this.url}/notes`, request);
  }

  public deleteUser(id:any):Observable<any>{
    return this.http.delete<any>(`${this.url}/notes/${id}`);
  }

  //login

  public getLogin(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(`${this.url}/users`);
  }
  
  public createLogin(request: ResponseLogin): Observable<any>{
    return this.http.post<any>(`${this.url}/users`, request);
  }

}
