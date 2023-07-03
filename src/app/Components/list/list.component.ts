import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InputGeneric } from 'src/FormServices/inputGeneric';
import { UserStateModel } from 'src/app/Models/user-state.model';
import { UserModelTs } from 'src/app/Models/user.model.ts';
import { FormControlsService } from 'src/app/Serveices/form-controls.service';
import { FormGrupService } from 'src/app/Serveices/form-grup.service';
import { TempDataService } from 'src/app/Serveices/temp-data.service';
import { selectAllUsers } from 'src/app/UserStore/user.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
Userlist!:Observable<Array<UserModelTs>>
Controls!:InputGeneric<string>[]
User!:FormGroup
constructor(private store:Store<UserStateModel>,private InputService:FormControlsService,private GroupService:FormGrupService,private api:TempDataService){
this.Userlist=this.store.select(selectAllUsers)
this.Controls=this.InputService.GetFormControls();
this.User=this.GroupService.CreateGroup(this.Controls)
}
Edit(user:UserModelTs){
this.User.patchValue(user);
}
}
