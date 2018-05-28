import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newItem',
  templateUrl: './newItem.component.html',
  styleUrls: ['./newItem.component.scss'],
  host: { 'class': 'col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3' }
})
export class NewItemComponent implements OnInit {

  image: string;
  constructor() { }

  ngOnInit() {

  }

}
