import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { provideHttpClient } from '@angular/common/http';
import { DogService } from './dog.service';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [ BrowserModule, ReactiveFormsModule],
  //Import httpClient
  //Declaring the Services
  providers: [provideHttpClient(),DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
