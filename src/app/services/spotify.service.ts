import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("spotify service listo")
  }
    getQuery(query:string){
      const url=`https://api.spotify.com/v1/${query}`
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQDDbnThyva7nu28XMKukZrJLBehosPiG1BOwe8Ts5G2qiYzXLkEEdat7JPpxn6dArLb1E39O52BWFvGTG9mzOG96XRGvlltGCNSuBaABGS6osCrXnQ'
      })
      return this.http.get(url, {headers})
    }
   getnewerealeses(){


          return this.getQuery('browse/new-releases')
          .pipe(map((data:any)=>data['albums'].items));



   }
   getartistas(termino:string){
     return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map((data:any)=>data['artists'].items));


   }
}
