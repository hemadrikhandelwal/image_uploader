import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { provideRouter } from '@angular/router';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
          provideRouter([])
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show "Image Uploader" on gallery route',()=>{
    component.currentRoute.set('/gallery');
   expect(component.buttonName()).toBe('Image Uploader') 

  })

  it('should show "View Gallery" on home route',()=>{
    component.currentRoute.set('/');
    expect(component.buttonName()).toBe('View Gallery')
  })

  it('should set buttonRoute to "/" on gallery route ',()=>{
    component.currentRoute.set('/gallery');
    expect(component.buttonRoute()).toBe('/')
  })

  it('should set buttonRoute to "/gallery" on imageuploader route ',()=>{
    component.currentRoute.set('/');
    expect(component.buttonRoute()).toBe('/gallery')
  })

  it('should display "image uploader" as button name in UI',()=>{
    component.currentRoute.set('/gallery');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button');
    expect(button?.textContent)
  .toContain('Image Uploader');

  } )

  it('should display "view gallery" as button name in UI',()=>{
    component.currentRoute.set('/');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button');
    expect(button?.textContent)
  .toContain('View Gallery');

  } )
});
