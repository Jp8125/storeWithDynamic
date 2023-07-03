import { Injectable } from '@angular/core';
import { Radio } from 'src/FormServices/RadioInput';
import { SelectOptions } from 'src/FormServices/SelectorInput';
import { InputGeneric } from 'src/FormServices/inputGeneric';
import { Textbox } from 'src/FormServices/textInput';

@Injectable({
  providedIn: 'root'
})
export class FormControlsService {
  constructor() { }
  GetFormControls(){
    let formControls:Array<InputGeneric<string>>=[
     new Textbox({value:'demo',label:'name',required:true,key:'name',order:1,type:'text'}),
     new Textbox({value:'1234@gmail.com',label:'email',required:true,key:'email',order:2,type:'email'}),
     new SelectOptions({key:'status',label:'status',required:true,options:[{key:'active',value:'active'},{key:'inactive',value:'inactive'}]}),
     new Radio({key:'gender',label:'gender',required:true,options:[{key:'m',value:'male'},{key:'f',value:'female'}],type:'radio'})
    ]
    return formControls
  }
}
