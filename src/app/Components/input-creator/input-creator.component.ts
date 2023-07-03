import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputGeneric } from 'src/FormServices/inputGeneric';

@Component({
  selector: 'app-input-creator',
  templateUrl: './input-creator.component.html',
  styleUrls: ['./input-creator.component.css']
})
export class InputCreatorComponent {
@Input() InputValue!:InputGeneric<string>
@Input() Form!:FormGroup
}
