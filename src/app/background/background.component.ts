import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

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
