import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  info = "Please leave your contact information here and I will get back to you as soon as possible. ";

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#fadeUpHeader").animate({ opacity: 1, top: "-50px" }, "slow","swing");
    });
    $(document).ready(function(){
      $("#fadeUpContent").animate({ opacity: 1, top: "-70px" },"slow","linear");
    });
  }

}
