import { Routes } from '@angular/router';
import { ImageUploader } from './features/images/components/image-uploader/image-uploader';
import { ImageGallery } from './features/images/components/image-gallery/image-gallery';

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
