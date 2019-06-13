import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  images = [`https://www.wallpapermaiden.com/wallpaper/6509/download/2560x1440/web-development-php-coding-classes.jpg`, 'https://www.wallpapermaiden.com/wallpaper/33782/download/2560x1440/forest-mist-trees-long-road-nature.jpeg'
          , 'https://www.wallpapermaiden.com/wallpaper/33501/download/2560x1440/turkish-coffee-camera-drinks-top-view-cup-food.jpeg'];
  
  //images = [`assets/img/helicopter1.jpg`, 'assets/img/helicopter2.jpg', 'assets/img/helicopter2.jpg'];
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
