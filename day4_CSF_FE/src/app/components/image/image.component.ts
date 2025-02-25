import { Component, inject } from '@angular/core';
import { GiphyService } from '../../giphy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image',
  standalone: false,
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  private giphySvc = inject(GiphyService)

  private sub!: Subscription

  gifs: string[] = []

  ngOnInit(): void {
    this.sub = this.giphySvc.searchResults.subscribe({
      next: (images) => {
        console.info(images)
        this.gifs= images
      }
    })

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
