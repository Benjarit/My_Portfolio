import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    // this.http.get('/api/all')
    // .subscribe((response) => {
    //   console.log(response);
    // });
}
