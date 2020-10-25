import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar-social',
  templateUrl: './navbar-social.component.html',
  styleUrls: ['./navbar-social.component.css']
})
export class NavbarSocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.tooltipped').tooltip();
  }

}
