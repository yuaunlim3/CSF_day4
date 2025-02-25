import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ImagesComponent } from './components/images/images.component';
import { provideHttpClient } from '@angular/common/http';
import { GiphyService } from './giphyService';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [provideHttpClient(),GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
