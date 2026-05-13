import { Component, inject, signal } from '@angular/core';
import { Images } from '../../services/images';
import { ImageModel, ImageResponse } from '../../models/image.inteface';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css',
})
export class ImageGallery {

  private imageService = inject(Images)
  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  images = signal<ImageModel[]>([])


  ngOnInit() {

    this.fetchAllImages()

  }

  fetchAllImages() {
    this.imageService.getAllImages().subscribe((resp: ImageResponse) => {
      this.images.set(resp.data);
    })

  }


  deleteImage(id:string) {
    this.imageService.deleteImage(id).subscribe((resp:ImageResponse)=>{
      if(resp){
        this.openSuccessSnackBar();
        this.fetchAllImages();
      }
      else{
        this.openFailSnackBar()
      }
    })
  }

    openSuccessSnackBar() {
    this._snackBar.open('Success','Image deleted successfully', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    
  }

  openFailSnackBar(){
     this._snackBar.open('Fail','Image cannot be deleted', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }




}
