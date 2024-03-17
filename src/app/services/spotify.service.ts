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
        'Authorization': 'Bearer BQDmLlllg_5Ou-VcSesjBVbl_-q2MfQRJEc8ZpLAanWPck7mjfRV8K1rTQx4vyKIH_Y3BtkxC6nRBVMNQs3typLaCAI_EtO0LS_Scg9SyeMfmWPVD2E'
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
   getartista(id:string){
    return this.getQuery(`v1/artists/${id}`);
               //.pipe(map((data:any)=>data['artists'].items));


  }
}
