import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm!: FormGroup;
constructor(private formBuilder: FormBuilder,private auth:AuthService,private router:Router){
  console.log(this.auth.islogin());
    
  if(this.auth.islogin()){
    this.router.navigate(['/chat'])
  }
  else
  {
    this.router.navigate(['/login'])
  }
  this.userForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });
}
get f() { return this.userForm.controls; }

onSubmit() {
  if (this.userForm.invalid) {
    return;
  }
  this.auth.login(this.userForm.value)
  // Form is valid, continue with your form submission logic here
  console.log(this.userForm.value);
  // Your code to submit the form data goes here
}
}
