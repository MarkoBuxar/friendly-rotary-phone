import { CategoriesService } from './../categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imageFull',
  templateUrl: './imageFull.component.html',
  styleUrls: ['./imageFull.component.scss']
})
export class ImageFullComponent implements OnInit {

  deleteBtnText: string = "delete";

  constructor(public categoriesService: CategoriesService, private route: ActivatedRoute) { }
  image;

  ngOnInit() {
    // this.image = this.route.snapshot;
    // console.log(this.image);

  }

  close() {
    this.categoriesService.toggleFullImage();
  }

  delete() {
    let r = confirm('Are you sure you want to delete this image?');
    if (r) {
      this.deleteBtnText = "loading...";
      this.categoriesService.deleteImage(this.route.snapshot.params.category, this.route.snapshot.params.number);
    }
  }

}
