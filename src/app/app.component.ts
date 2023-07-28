import { Component } from '@angular/core';
import { UserStateModel } from './Models/user-state.model';
import { Store } from '@ngrx/store';
import { loadUsers } from './UserStore/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeWithDynamic';
  constructor(private store: Store<UserStateModel>,private router:Router){
    this.store.dispatch(loadUsers())
   
  }
out(){
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  this.router.navigate(['/login'])
}
}
