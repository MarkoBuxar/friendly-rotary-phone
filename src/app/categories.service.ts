import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient, private router: Router) {
  }

  public api: string = 'http://api.programator.sk/';
  // public api = 'http://localhost:3000/';
  public categories;


  public background: string = '../../assets/default.png';

  // public categories: any = [{
  //   name: 'cars',
  //   number: 122,
  //   image: ['../assets/pexels-photo-210019.jpeg', '../assets/pexels-photo-210019.jpeg', '../assets/food-salad-healthy-lunch.jpg', '../assets/food-salad-healthy-lunch.jpg', '../assets/food-salad-healthy-lunch.jpg']
  // }, {
  //   name: 'food',
  //   number: 5,
  //   image: ['http://api.programator.sk/images/200x200/aaa/52a51e8670a95c9379714656f3bfd3f1-7.jpg']
  // }, {
  //   name: 'architecture',
  //   number: 9,
  //   image: ['../assets/bg.jpeg']
  // }, {
  //   name: 'people',
  //   number: 33,
  //   image: ['../assets/pexels-photo-27411.jpg']
  // }
  // ];


  public modal: boolean = false;
  public fullImage: boolean = false;
  public currImage: string;
  public uploadAmmount: number = 0;
  public uploadStatus: boolean = false;

  public getCategories() {
    if (isDevMode()) {
      console.log('get');
    }
    return this.http.get(this.api + 'gallery');
  }

  public changeBackground(image) {
    this.background = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(' + image + ')';
  }

  public toggleModal() {
    this.modal = !this.modal;
  }

  public toggleFullImage() {
    this.fullImage = !this.fullImage;
  }

  public newCategory(name) {
    if (isDevMode()) {
      console.log('new category post');
    }
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.api + 'gallery', { "name": name }, { headers: headers }).subscribe((data) => {
      this.modal = false;
      this.router.navigate(["/"])
    }, (err) => {
      alert(err.error.description);
      if (isDevMode()) {
        alert('categories.service.ts, line 70, name post error');
      }
    });
  }

  public getImages(name) {
    if (isDevMode()) {
      console.log('images get');
    }
    return this.http.get(this.api + 'gallery/' + name);
  }

  public deleteCategory(category) {
    if (isDevMode()) {
      console.log('delete category');
    }
    this.http.delete(this.api + 'gallery/' + category).subscribe((data) => {
      this.router.navigate(["/"]);
    }, (err) => {
      alert('error');
      if (isDevMode()) {
        alert('categories.service.ts, line 85, category delete error');
        console.log(err);
      }
    });
  }

  public uploadImage(data, info) {
    this.http.post(this.api + 'gallery/' + info.name, data, { 'responseType': 'blob' })
      .subscribe((data) => {
        this.uploadAmmount--;
        if (isDevMode()) {
          console.log('image upload success');
          console.log(this.uploadAmmount);
        }
        if (this.uploadAmmount == 0) {
          this.uploadStatus = false;
          this.toggleModal();
          location.href = '#/category/' + info.name + '/' + info.id;
        }
      }, (err) => {
        if (isDevMode()) {
          alert('imageModal.component.ts, line 58, image upload post');
        }
        alert('Image upload error\nOnly JPG/JPEG is supported');
        this.uploadStatus = false;
        location.reload();

      });
  }



  public setCurrImage(image) {
    this.currImage = image;
  }

  public deleteImage(name, id) {
    this.http.delete(this.api + 'gallery/' + this.currImage).subscribe((data) => {
      this.currImage = '';
      this.fullImage = false;
      this.router.navigate(['/']);
      setTimeout(() => {
        this.router.navigate(['category/' + name + '/' + id]);
      }, 50);
    }, (err) => {
      alert('error');
      if (isDevMode()) {
        alert('categories.service.ts, line 120, delete image error');
      }
    });
  }
}