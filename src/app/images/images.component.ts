import { Router } from '@angular/router';
import { CategoriesComponent } from './../categories/categories.component';
import { CategoriesService } from './../categories.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  images;
  @Input('info') info;

  constructor(public categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {
    this.categoriesService.getImages(this.info.name).subscribe((data: any) => {
      this.images = data.images;
      this.categoriesService.background = this.images[0] != undefined ? this.categoriesService.api + 'images/1000x1000/' + this.images[0].fullpath : '../../assets/default.png';
    }, (err) => {
      alert('images.component.ts, line 22, get images error');
    });
  }

  openModal() {
    this.router.navigate(["/category/" + this.info.name + "/" + this.info.id + "/new"]);
  }

  openImage(image) {
    this.categoriesService.toggleFullImage();
    this.categoriesService.setCurrImage(image.fullpath);
  }


}
