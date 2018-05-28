import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CategoriesService } from './../categories.service';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UploadEvent, UploadFile, FileSystemDirectoryEntry, FileSystemFileEntry } from 'ngx-file-drop';


@Component({
  selector: 'app-imageModal',
  templateUrl: './imageModal.component.html',
  styleUrls: ['./imageModal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input() info;
  api;
  public files: UploadFile[] = [];
  fileHover = false;
  uploadStatus;


  constructor(public categoriesService: CategoriesService,
    private router: Router,
    private http: HttpClient,
    private el: ElementRef) { }

  ngOnInit() {
    this.api = this.categoriesService.api + 'gallery/' + this.info.name;

  }

  closeModal() {
    this.categoriesService.toggleModal();
    this.router.navigate(['/category/' + this.info.name + "/" + this.info.id]);
  }

  public dropped(event: UploadEvent) {
    this.categoriesService.uploadStatus = true;
    this.fileHover = false;
    this.files = event.files;
    for (const droppedFile of event.files) {
      this.categoriesService.uploadAmmount++;
      // console.log(this.categoriesService.uploadAmmount);

      if (droppedFile.fileEntry.isFile) {
        let fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // console.log(droppedFile.relativePath);
          // console.log(file);
          // console.log(file, droppedFile.relativePath);

          const formData = new FormData();
          formData.append('image', file, droppedFile.relativePath);
          this.categoriesService.uploadImage(formData, this.info);

        });
      } else {
        alert('folders not supported');
      }
    }
  }
  fileOver(event) {
    this.fileHover = true;
  }

  fileLeave(event) {
    this.fileHover = false;
  }

  upload(event) {
    this.categoriesService.uploadStatus = true;
    let files = event.srcElement.files;
    if (event.length == 0) { return; }
    for (var i = 0; i < files.length; i++) {
      this.categoriesService.uploadAmmount++;
      let formData = new FormData();
      formData.append('image', files[i], files[i].name);
      this.categoriesService.uploadImage(formData, this.info);
    }


    //   let files: FileList = inputEl.files;
    //   const formData = new FormData();
    //   for (var i = 0; i < files.length; i++) {
    //     formData.append(files[i].name, files[i]);
    //   }

  }

}
