import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from './../categories.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  host: { 'class': 'col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3' }
})
export class ItemComponent implements OnInit {

  @Input() category;

  constructor(public categoriesService: CategoriesService) { }

  ngOnInit() {
  }

}
