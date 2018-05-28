import { Router } from '@angular/router';
import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories;


  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((data: any) => {
      this.categories = data.galleries;
      this.categoriesService.changeBackground(this.categories[0].image != undefined ? this.categoriesService.api + 'images/1000x1000/' + this.categories[0].image.fullpath : '../../assets/default.png');

    }, (err) => {
      console.log(err);
      alert('error: categories.component.ts, line 21, api get error');
    });
  }

  changeBg(image) {
    this.categoriesService.changeBackground(image);
  }

  toggleModal() {
    // this.categoriesService.toggleModal();
    this.router.navigate(['/new']);
  }

  redirect(i: number) {
    this.router.navigate(['/category', this.categories[i].name, i]);
  }


}
