import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-lineatiempo',
  templateUrl: './lineatiempo.component.html',
  styleUrls: ['./lineatiempo.component.css']
})
export class LineatiempoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.js-timeline').Timeline({
    autoplay: true,
    autoplaySpeed: 3000

    });
    $('.carousel').carousel({
      indicators: true,
      numVisible: 3,
      noWrap: true,
      dist: -80,
      padding: 5,
      duration: 200
    });


  }

}
