import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  newCatName = '';
  btnText: string = "+ submit";

  constructor(public categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {
  }

  newCategory() {
    this.btnText = "loading...";
    this.categoriesService.newCategory(this.newCatName);
    this.newCatName = '';
  }

  cancel() {
    this.categoriesService.toggleModal();
    this.router.navigate(["/"]);
  }

}
