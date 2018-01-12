import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-header',
  template: '<h1>{{ title }}</h1>',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
