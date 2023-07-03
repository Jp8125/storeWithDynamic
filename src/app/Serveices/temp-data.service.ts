import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModelTs } from '../Models/user.model.ts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  url:string="https://gorest.co.in/public/v2/users"
  constructor(private http:HttpClient) { }
  GetUsers():Observable<Array<UserModelTs>>{
    return this.http.get<Array<UserModelTs>>(this.url)
  }
  postUser(user:UserModelTs){
    return this.http.post<UserModelTs>(this.url, user)
  }
}
