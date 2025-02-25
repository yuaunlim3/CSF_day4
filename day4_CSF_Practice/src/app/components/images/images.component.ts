import { AfterViewInit, Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { GiphyService } from '../../giphyService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-images',
  standalone: false,
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent implements OnInit,OnDestroy{
  private giphySvc = inject(GiphyService)
  private sub!: Subscription
  gifs:string[] = []
  ngOnInit(): void {
    this.sub = this.giphySvc.newGifsSearch.subscribe(
      (images) => this.gifs = images
    )

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
 

}
