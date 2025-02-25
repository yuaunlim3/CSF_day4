import { Component, inject } from '@angular/core';
import { DogService } from './dog.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day4_CSF_Example';

  private dogSvc = inject(DogService)

  protected dogImages: string[] = []

  private sub!: Subscription

  fetchDogs() {

    //Using Observable
    /*
    this.sub = this.dogSvc.getDogs().subscribe({

      next: (dogs) => {
        console.info("The dogs",dogs);
        this.dogImages = dogs.message

      },
      error:(err) => {console.info("The error:",err)},
      complete:()=>{
        console.info("Complete")
        this.sub.unsubscribe()
      }
    }
    )
    

    //Using Promise

    this.dogSvc.getDogsAsPromise()
      .then(dogs => {
        console.info("The dogs", dogs);
        this.dogImages = dogs.message
      })
      .catch(err => {
        console.info("The error:", err);
        alert(`Error: ${JSON.stringify(err)}`);

      })
       */

    //Using Promise BY Converting to array first
    this.dogSvc.getDogsImages()
    .then(dogs => {
      console.info("The dogs", dogs);
      this.dogImages = dogs
    })
    .catch(err => {
      console.info("The error:", err);
      alert(`Error: ${JSON.stringify(err)}`);

    })
  }

}