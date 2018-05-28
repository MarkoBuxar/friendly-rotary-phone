import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  categories = [];
  background: any = '';

  constructor(public categoriesService: CategoriesService, private router: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.snapshot.url[0] != undefined) {
      if (this.router.snapshot.url[0].path == 'new') {
        this.categoriesService.toggleModal();
      }
    }

    // this.background = 'url(' + this.categoriesService.getBackground() + ')';

    // this.background = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(' + this.categoriesService.background + ')';
    // if (this.background == undefined) {
    //   this.background = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../../assets/bg.jpeg)'
    // }
  }

  currPage: string = 'kategórie';

}
