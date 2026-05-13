import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css',
})
export class ImageGallery {

  images = [
  {
    id: 1,
    name: 'Mountain View',
    imageUrl: 'https://via.placeholder.com/150',
    
  },
  {
    id: 2,
    name: 'Nature Lake',
    imageUrl: 'https://via.placeholder.com/150',
    
  }
];

  deleteImage(id:number){
    
  }



}
