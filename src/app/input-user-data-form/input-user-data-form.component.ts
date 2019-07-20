import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.scss']
})
export class InputUserDataFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      company: ['', [Validators.required]],
      url: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['']
    });
  }
  onSubmit(){
      if(this.userForm.valid){
        this.http.post('/api/form', this.userForm.value)
        .subscribe((response)=>{
          console.log('repsonse ',response);
        })
        this.userForm.reset();
      }else {
        alert("Invalid Input");
      }
  }
  get company() { return this.userForm.get('company'); }
  get url() { return this.userForm.get('url'); }
  get email() { return this.userForm.get('email'); }
}
