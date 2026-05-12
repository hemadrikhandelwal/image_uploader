import { Component } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  imports: [],
  templateUrl: './image-uploader.html',
  styleUrls: ['./image-uploader.css'],
})
export class ImageUploader {


  // TODO: SIgnal form for image upload and 
  // form to cone ct to ost request 
  // check the entire end to end flow of posting the image 

  selectedFileName = '';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.selectedFileName = file ? file.name : '';
  }

  uploadImage(){
    console.warn(" image is uploade need o call teh post api here ")
  }
}
