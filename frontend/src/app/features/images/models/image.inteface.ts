export interface ImageModel {
  id: string;
  image_url: string;
  image_name: string;
}



export interface ImageResponse {
  message: string;
  data: ImageModel[];
}