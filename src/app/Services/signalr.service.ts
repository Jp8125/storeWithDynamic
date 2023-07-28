import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr'
@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection!: signalR.HubConnection;
  connection(id:number){
    this.hubConnection=new signalR.HubConnectionBuilder().withUrl(`https://localhost:7006/chathub?userId=${id}`).build()
    this.startConnection()
    this.hubConnection.on("receive",(id,message)=>{
      console.log(id,message);
      
    })
  }
  startConnection(){
    this.hubConnection.start().then(()=>{
      console.log('connection established');
    })
    .catch(err=>{
      console.log(err);
    })
  }
  sendmessage(id:number,message:string,sernderID:number){
    this.hubConnection.invoke("send",id,message,sernderID)
  }
}
