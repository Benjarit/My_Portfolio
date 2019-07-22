import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  _option = "Jobs"
  constructor() { }

  set option(title: string){
    this._option = title;
  }
  get option(){
    return this._option;
  }
  ngOnInit() {
  }

}
