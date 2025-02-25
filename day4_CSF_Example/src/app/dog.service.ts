import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { firstValueFrom, map, Observable, Subject } from "rxjs";
import { DogResult } from "./model";

//@Injectable({ providedIn : 'root'}) //-> @Service
@Injectable()
export class DogService{
    //Overwire in the HTTPClient
    //RestTemplate
    private http = inject(HttpClient)

    getDogs(count = 3):Observable<DogResult>{
        return this.http.get<DogResult>(`https://dog.ceo/api/breeds/image/random/${count}`)

    }

    getDogsAsPromise(count = 3):Promise<DogResult>{
        //Convert Observable -> Promise
        return firstValueFrom(this.http.get<DogResult>(`https://dog.ceo/api/breeds/image/random/${count}`))
    }

    getDogsImages(count = 3):Promise<string[]>{
        /*
        return firstValueFrom(
            this.http.get<DogResult>(`https://dog.ceo/api/breeds/image/random/${count}`).pipe(
                map(result => result.message)
            )
            )
            */
            return firstValueFrom(this.http.get<DogResult>(`https://dog.ceo/api/breeds/image/random/${count}`)).then(result => result.message)
    }

}