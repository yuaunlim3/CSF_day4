import { Component, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { GiphyService } from '../../giphyService';
import { Search } from '../../model';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  private fb = inject(FormBuilder)
  protected form!: FormGroup
  limit:number = 5;
  private sub!: Subscription


  giphySvc = inject(GiphyService)

  gifsUrls:string[] = []



  ngOnInit(): void {
    this.form = this.fb.group(
      {
        query: this.fb.control<string>('', Validators.required),
        limit: this.fb.control<number>(5, [Validators.min(1), Validators.max(25)]),
        rating: this.fb.control<string>('g')
      })
      this.form.valueChanges.subscribe(values => {
        this.limit = values.limit; 
      });
  }


  processForm() {
    const search: Search = this.form.value
    this.giphySvc.setParams(search)
    this.giphySvc.getGiphy()
    this.giphySvc.resetParams()
    
  }

  reset() {
    this.form.reset()
    this.form = this.fb.group(
      {
        query: this.fb.control<string>('', Validators.required),
        limit: this.fb.control<number>(5, [Validators.min(1), Validators.max(25)]),
        rating: this.fb.control<string>('g')
      })
    this.giphySvc.resetParams()
  }



}
