import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsService } from '../forms.service';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  constructor(private http: HttpClient, private formservice: FormsService) { }

  ngOnInit() {
    this.formservice.getUserDetail().subscribe((response) => {
      console.log(response);
    });
  }
}
