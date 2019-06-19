import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  heliDescription = "Ben started flying RC Helicopter when he was only nine years old. He had competed in many world competitions with 3D as well as F3C, then he was approached by Align Corporation"+
  " to be a presenter/tester of their products. Align was and still is one of the top well-known RC suppliers in the world for their quality unmanned aerial vehicle and other electronic components,"+
  " such as speed controllers, brushless motors, etc. He was ranked World No. 11 at the age of thirteen.";

  producerDescription = "Ben had offered affordable video editing services to more than 5 businesses."+ 
  " The videoes signicantly increased the number of sale activities and memberships to those businesses. He loves to creative video"+ 
  " content that engages audiences through the right message with impressive results from time to time within the affordable budget."+ 
  " Ben also had to effectively communicate to all team members while working effectively under multiple deadlines, and function under pressure.";

  developerDescription = "Ben began using computers and writing software at the age of 15 when he took his first computer science class during his junior year in high school."+
  " The class was titled Introduction to C++ Programming. It was the class where he learned about his passion for programming, and since then he always wanted to become a software engineer"+
  " so he can help change the world to become a better place. With this, he decided to pursue for computer engineering degree in college.";

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
