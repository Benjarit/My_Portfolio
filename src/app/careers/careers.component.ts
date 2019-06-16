import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})


export class CareersComponent implements OnInit {

  aboutme: string;
  workflowDescription: string;
  workflowResponsibility: string[] = ["UI/UX Design", "Project Planning/Design", "Frontend/Backend Communication", "Database Structure", "User Documentation"];

  argricultureDescription: string;
  scadaDescription: string;
  yaffleDescription: string;

  constructor() { }

  ngOnInit() {
    this.aboutme = "Ben has graudated from the University of Missouri - Columbia (UMC) in May 2019 with B.S. Computer Engineering Degree and minor in Math and Computer Science. " +
          "Before graduation, he was working as a Part-time Student Software Developer at College of Engineering and School of Natural Resources, "+
          "and he was also a Peer Learning Assistant where he had an oppotunity to help his fellows at school to perform beyond the standards in computer science and math courses. During his time as a software developer at UMC, "+
          "he had contributed his work to many meaningful projects that help enhancing people lives. These lives include students, faculties, researches, and farmers.";
    
    this.workflowDescription = "A valuable system that is currently being used by the whole engineering department. The system"+
    " allows faculties and students to submit administrative work requests online. use it for submitting tickets for fiscal, HR and marketing/communications tasks, such as student orgs purchasing card requests,"+
    " website edits, and digital marketing requests which reduce the requests processing time by 50%.";
    
    this.argricultureDescription = "Ben had developed an application that is meant to help farmers and extension agents understand the trees growing nearby which maybe useful for agroforestry systems."+
    " The application will also provide some data on the soil and climate of farmers' farm.";

    this.scadaDescription = "";
    this.yaffleDescription = "";
    
    


    
    $(document).ready(function(){
      $("#fadeUpHeader").animate({ opacity: 1, top: "-50px" }, "slow","swing");
    });
    $(document).ready(function(){
      $("#fadeUpContent").animate({ opacity: 1, top: "-70px" },"slow","linear");
    });
    
  }

}
