import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }  
  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      this.auth.getUserDetail(this.userForm.value)
      .subscribe((response)=>{
        if(response.sucess){
          this.auth.login = true;
          this.router.navigate(['joblist']);
        }else{
          window.alert("You are not in yet!!");
        }
      });
    }else{
      alert("Invalid Input");
    }
  }
  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }
}