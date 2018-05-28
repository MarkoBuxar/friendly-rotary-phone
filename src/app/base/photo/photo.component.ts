import { CategoriesService } from './../../categories.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  host: { 'class': 'col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3' }

})
export class PhotoComponent implements OnInit {

  @Input() image;

  constructor(public categoriesService: CategoriesService) { }

  ngOnInit() {
  }

}
