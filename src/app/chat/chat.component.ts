import { Component } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subscription } from 'rxjs';
import { SignalrService } from '../Services/signalr.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userID!:number
  recieverId!:number
  message!:string
constructor(private chatService:SignalrService){
  this.userID=parseInt(localStorage.getItem('id') as string)
  this.chatService.connection(this.userID)
}
send(){
  this.chatService.sendmessage(this.recieverId,this.message,this.userID)
}
}
