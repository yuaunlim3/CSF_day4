import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Giphy, Search } from "./model";
import { Observable, Subject } from "rxjs";

@Injectable()
export class GiphyService{
    private http = inject(HttpClient)

    private url = 'https://api.giphy.com/v1/gifs/search'
    private API_KEY = "3paZg00JY1jCdzQTmDhhMbOKr5cri4sU"

    queryParams: HttpParams = new HttpParams();

    newGifsSearch = new Subject<string[]>()
    
    getGiphy() {
        console.info("GETTING GIFS:")
        this.http.get<Giphy>(this.url, { params: this.queryParams }).subscribe(
            (response) => {
                console.info("The response:",response)
                const gifs = response.data.map(gif => gif.images.fixed_height.url);
                this.newGifsSearch.next(gifs);

            },
            (error) => {
                console.error("Error fetching gifs:", error);
            }
        )
    }
    

    setParams(search:Search){
        this.queryParams = new HttpParams()
        .set("api_key", this.API_KEY)
        .set("q",search.query.replace(" ","+"))
        .set("limit",search.limit)
        .set("offset",0)
        .set("rating",search.rating)
        .set("lang","en")
        .set("bundle","messaging_non_clips");
        console.info("Search made:",this.queryParams.toString())
    } 

    resetParams(){
        this.queryParams = new HttpParams();
    }
}