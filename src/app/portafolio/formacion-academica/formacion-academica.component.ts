import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel();
  }

}
