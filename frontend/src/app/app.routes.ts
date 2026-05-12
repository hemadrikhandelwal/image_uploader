import { Routes } from '@angular/router';
import { ImageUploader } from './features/images/image-uploader/image-uploader';
import { ImageGallery } from './features/images/image-gallery/image-gallery';

export const routes: Routes = [
    {
        path:'',
        component:ImageUploader
    },
    {
        path:'gallery',
        component:ImageGallery
    },

];
