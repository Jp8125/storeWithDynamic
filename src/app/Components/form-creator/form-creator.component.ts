import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InputGeneric } from 'src/FormServices/inputGeneric';
import { UserStateModel } from 'src/app/Models/user-state.model';
import { FormControlsService } from 'src/app/Serveices/form-controls.service';
import { FormGrupService } from 'src/app/Serveices/form-grup.service';
import { addTrigger } from 'src/app/UserStore/user.actions';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent {
  Controls!:InputGeneric<string>[]
  User!:FormGroup
constructor(private InputService:FormControlsService,
  private GroupService:FormGrupService,private store:Store<UserStateModel>){
this.Controls=this.InputService.GetFormControls();
this.User=this.GroupService.CreateGroup(this.Controls)
}
Add(){
  console.log(this.User.value);
 this.store.dispatch(addTrigger({value: this.User.value}))
  
}
edit(){
  let obj={name: 'Jay', email: 'jay21213@gmail.com', status: 'inactive', gender: 'm'}
  this.User.patchValue(obj)
}
}
