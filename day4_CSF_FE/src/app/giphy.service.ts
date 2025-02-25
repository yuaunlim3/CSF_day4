import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { firstValueFrom, map, Subject, tap } from "rxjs";
import { searchCriteria } from "./model";

@Injectable()
export class GiphyService{
    private http = inject(HttpClient)

    searchResults = new Subject<string[]>()

    reset(){
        this.searchResults.next([])
    }

    search(criteria:searchCriteria):Promise<string[]>{
        const params = new HttpParams()
                        .set('q',criteria.q)
                        .set('limit',criteria.limit)
                        .set('rating',criteria.rating)
        
        return firstValueFrom<string[]>(
            this.http.get<any>('http://localhost:8080/api/giphy',{params}).pipe(
                tap(result => console.info(result)),
                map(result => result['data']),
                map((data:any[]) => data.map((g:any) => g.images.fixed_height.url.string)),
                tap((image:any) => {
                    console.info(image)
                    this.searchResults.next(image)
                  })
            )
        )
                
    }
}