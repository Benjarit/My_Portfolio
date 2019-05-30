import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.scss']
})
export class InputUserDataFormComponent implements OnInit {
  private userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit(){
    if(this.userForm.valid){
      alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }
  }
}
