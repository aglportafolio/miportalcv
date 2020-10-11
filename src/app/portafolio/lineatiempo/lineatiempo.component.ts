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

  }

}
