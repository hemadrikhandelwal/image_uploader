import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  
})
export class Header {
  

  private router = inject(Router)
  currentRoute = signal(this.router.url);


  buttonName = computed(() => {
    return this.currentRoute() === '/gallery'
      ? 'Image Uploader'
      : 'View Gallery';
  });

  buttonRoute = computed(() => {
    return this.currentRoute() === '/gallery' ? '/' : '/gallery';
  });





  ngOnInit(){

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute.set(this.router.url);
      });


  }




  

}
