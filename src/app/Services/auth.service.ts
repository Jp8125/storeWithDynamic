import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInput } from '../usermode';
import { Router } from '@angular/router';
import { SignalrService } from './signalr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string='https://localhost:7006/api'
  constructor(private http:HttpClient,private router:Router,private chat:SignalrService) { }
  login(data:UserInput){
     this.http.post<{uid:number,name:string}>(this.url+'/Auth/login',data).subscribe({
      next:(res)=>{
        console.log(res)
        localStorage.setItem('id',res.uid.toString())
        localStorage.setItem('token',res.name)
        this.router.navigate(['/chat'])
       },error:(err)=>{
        console.log(err);
        
       }
     })
  }
  islogin(){
    let data=localStorage.getItem('token')
    console.log(data);
    if(data!=null){
      return true;
    }
    else{
      return false
    }
  }
}
