import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './base/photo/photo.component';
import { CategoriesService } from './categories.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemComponent } from './item/item.component';
import { NewItemComponent } from './newItem/newItem.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ImagesComponent } from './images/images.component';
import { ImageModalComponent } from './imageModal/imageModal.component';
import { FileDropModule } from 'ngx-file-drop';
import { ImageFullComponent } from './imageFull/imageFull.component';




const routers = [
  // { path: "", redirectTo: "", pathMatch: 'full', component: BaseComponent },
  { path: "", component: BaseComponent },
  { path: "new", component: BaseComponent },
  { path: "category/:category/:number", component: CategoryComponent },
  { path: "category/:category/:number/new", component: CategoryComponent },

  { path: "**", redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CategoriesComponent,
    ItemComponent,
    NewItemComponent,
    ModalComponent,
    CategoryComponent,
    ImagesComponent,
    PhotoComponent,
    ImageModalComponent,
    ImageFullComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers, { useHash: true }),
    FormsModule,
    HttpClientModule,
    FileDropModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
