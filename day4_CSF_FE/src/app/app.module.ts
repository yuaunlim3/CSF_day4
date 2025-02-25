import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ImageComponent } from './components/image/image.component';
import { provideHttpClient } from '@angular/common/http';
import { GiphyService } from './giphy.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(),GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
