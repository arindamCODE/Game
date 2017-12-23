
import { SimpleTimer } from 'ng2-simple-timer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ImageArrComponent } from './image-arr/image-arr.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageArrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
