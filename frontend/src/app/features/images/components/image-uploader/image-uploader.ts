import { Component, inject } from '@angular/core';
import { Images } from '../../services/images';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-uploader',
  imports: [],
  templateUrl: './image-uploader.html',
  styleUrls: ['./image-uploader.css'],
})
export class ImageUploader {

  private imageService = inject(Images)
   private _snackBar = inject(MatSnackBar);

   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // TODO: Signal form for image upload and 
  // form to cone ct to post request 
  // check the entire end to end flow of posting the image 

  selectedFileName = '';
  selectedFile: File | null = null;


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;
    this.selectedFileName = file ? file.name : '';
    this.selectedFile = file;
  }

  uploadImage() {
    if (!this.selectedFile) return;

    const formData = new FormData();

    formData.append('image', this.selectedFile);

    this.imageService.postImage(formData).subscribe((resp)=>{
      if(resp){
        this.openSuccessSnackBar();
      }
      else{
        this.openFailSnackBar();
      }
    })


  }

   openSuccessSnackBar() {
    this._snackBar.open('Success','Image uploaded successfully', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    
  }

  openFailSnackBar(){
    this._snackBar.open('Fail','Image upload fail', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
