import { Component } from '@angular/core';
import { UserStateModel } from './Models/user-state.model';
import { Store } from '@ngrx/store';
import { loadUsers } from './UserStore/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeWithDynamic';
  constructor(private store: Store<UserStateModel>){
    this.store.dispatch(loadUsers())
  }
}
