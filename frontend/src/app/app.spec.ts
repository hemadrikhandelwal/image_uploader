import { TestBed } from "@angular/core/testing";
import { App } from './app';
import { provideRouter, RouterOutlet } from "@angular/router";
import { Header } from "./pages/header/header";

 describe( 'App',()=>{

  beforeEach(async()=>{
      await TestBed.configureTestingModule({
        imports:[App,],
        providers: [
          provideRouter([])
        ]

      }).compileComponents();
  })
  it('should create App',()=>{
    const fixture = TestBed.createComponent(App)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })
  it('should have title signal value', () => {

  const fixture = TestBed.createComponent(App);

  const app = fixture.componentInstance;

  expect(app.title()).toBe('image-uploader');

});
})