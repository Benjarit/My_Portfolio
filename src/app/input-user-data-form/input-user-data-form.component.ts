import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
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
      company: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      url: ['',[Validators.required, Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    // this.http.get('/api/all')
    // .subscribe((response) => {
    //   console.log(response);
    // });
  }
  onSubmit(){
      if(this.userForm.valid){
        this.http.post('/api/form', this.userForm.value)
        .subscribe((response)=>{
          console.log('repsonse ',response);
        })
      }else {
        alert('User form is not valid!!')
      }
  }
}
