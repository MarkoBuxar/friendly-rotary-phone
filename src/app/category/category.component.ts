import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  info: any = {}
  image;
  currPage: number;
  deleteBtnText: string = "delete";

  constructor(private route: ActivatedRoute, private router: Router, public categoriesService: CategoriesService) { }

  ngOnInit() {
    if (this.route.snapshot.url[this.route.snapshot.url.length - 1].path == 'new') {
      this.categoriesService.toggleModal();
    }
    this.info.name = this.route.snapshot.params.category;
    this.info.id = this.route.snapshot.params.number;
  }

  redirectHome() {
    this.router.navigate(['/']);
  }

  deleteCat() {
    let r = confirm("Are you sure you want to delete this category?");
    if (r == true) {
      this.deleteBtnText = "loading...";
      this.categoriesService.deleteCategory(this.info.name);
    } else {
    }
  }

}
