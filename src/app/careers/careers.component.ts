import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {


  aboutme = "Ben has graudated from the University of Missouri - Columbia (UMC) in May 2019 with B.S. Computer Engineering Degree and minor in Math and Computer Science. " +
          "Before graduation, he was working as a Part-time Student Software Developer at College of Engineering and School of Natural Resources, "+
          "and he was also a Peer Learning Assistant where he had an oppotunity to help his fellows at school to perform beyond the standards in computer and math courses. During his time as a software developer at UMC, "+
          "he had contributed his work to many meaningful projects that help enhancing people lives. These lives include students, faculties, other researches, and farmers.";

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
