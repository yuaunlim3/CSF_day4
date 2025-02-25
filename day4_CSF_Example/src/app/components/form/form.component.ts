import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map, Subject, Subscription } from 'rxjs';
import { DogService } from '../../dog.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder)
  protected form !: FormGroup
  private sub!: Subscription
  private status!: Subscription

  count = 0
  private counterSub = new Subject<number>()//Output is an Observable
  ngOnInit(): void {

    this.form = this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      address: this.fb.control<string>('', [Validators.required, Validators.minLength(3)])
    })


    this.counterSub.subscribe(
      (data) =>{
        console.info("Value: ",data)
      })
    //FOR THE STATUS OF THE FORM
    this.status = this.form.statusChanges.pipe(
      debounceTime(2000), //Not to overload the backend
      map(v=> v=="VALID") //to change to true or false value
    )
    .subscribe(
      (change) =>{console.info('Status:',change)}
    )

    //FOR THE VALUE OF THE FORM
    this.sub = this.form.valueChanges.subscribe({
      next:(value)=>{console.info(">>>Value:",value)},
      error:(err) =>{console.info("ERROR:",err)},
      complete:() =>{console.info('Complete')}   
      
    })

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
    this.status.unsubscribe()
  }

  process() {
    this.count++
    this.counterSub.next(this.count)
  }

}
