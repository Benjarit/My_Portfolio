import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private Auth: AuthService) { }  
  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      this.Auth.getUserDetail(this.userForm.value);
    }else {
      alert("Invalid Input");
    }
  }
}