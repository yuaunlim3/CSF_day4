import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GiphyService } from '../../giphy.service';
import { searchCriteria } from '../../model';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  private fb = inject(FormBuilder)
  protected form!: FormGroup
  protected limit: number = 5

  private giphySvc = inject(GiphyService)

  ngOnInit(): void {
    this.form = this.createForm();

  }

  protected processForm() {
    console.info("Search")
    const query: searchCriteria = this.form.value;
    this.giphySvc.search(query).then(result => console.info(
      result
    ))

  }

  protected reset() {
    this.form.reset()
    this.giphySvc.reset()
  }
  private createForm(): FormGroup {
    return this.fb.group(
      {
        query: this.fb.control<string>('', Validators.required),
        limit: this.fb.control<number>(5, Validators.required),
        rating: this.fb.control<string>("g")
      }
    )
  }

}
