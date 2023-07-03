import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputGeneric } from 'src/FormServices/inputGeneric';

@Injectable({
  providedIn: 'root'
})
export class FormGrupService {
  constructor() { }
  CreateGroup(FormData:Array<InputGeneric<string>>){
    let form:any=[]
    FormData.forEach(obj=>{
      form[obj.key]=obj.required==true?new FormControl(obj.value,Validators.required):new FormControl(obj.value)
    })
    return new FormGroup(form)
  }
}
