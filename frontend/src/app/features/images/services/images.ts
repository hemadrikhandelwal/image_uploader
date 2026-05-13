import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ImageResponse } from '../models/image.inteface';

@Injectable({
  providedIn: 'root',
})
export class Images {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getAllImages(){
    return this.http.get<ImageResponse>(`${this.apiUrl}/api/images/allimages`)
  }

  deleteImage(id:string){
    return this.http.delete<ImageResponse>(`${this.apiUrl}/api/images/${id}`)
  }

}
