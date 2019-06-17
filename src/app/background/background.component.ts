import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  //images = [`https://www.wallpapermaiden.com/wallpaper/6509/download/2560x1440/web-development-php-coding-classes.jpg`, 'https://www.wallpapermaiden.com/wallpaper/33782/download/2560x1440/forest-mist-trees-long-road-nature.jpeg'
  //        , 'https://www.wallpapermaiden.com/wallpaper/33501/download/2560x1440/turkish-coffee-camera-drinks-top-view-cup-food.jpeg'];
  
  heliDescription = "Ben started flying RC Helicopter when he was only 9 years old. He had competed in many world competitions with 3D as well as F3C, then he was approached by Align Corporation"+
  " to be a presenter/tester of their products. Align was and still be one of the top well-known company in the world for producing quality unmanned aerial vehicle and other electronic components,"+
  " such as speed controllers, brushless motors, etc. He was ranked World No. 11 at the age of 13."

  producerDescription = "Ben had offered affordable video editing services to more than 5 businesses."+ 
  " The videoes signicantly increased the number of sale activities and memberships to those businesses. He loves to creative video"+ 
  " content that engages audiences through the right message with impressive results from time to time within the affordable budget."+ 
  " Ben had to effectively communicate to all team members while working effectively under multiple deadlines, and function under pressure."+ 
  " This is a full-time entry level position."

  developerDescription = "Ben began using computers and writing software at the age of 15 when he took his first computer science class during his junior year in high school."+
  " The class was titled Introduction to C++ Programming. It was the class where he first learned about his own passion, and after then he always wanted to become a software engineer"+
  " where he can help change the world to become a better place. With his, he decided to pursue for computer engineering degree in college.";

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
