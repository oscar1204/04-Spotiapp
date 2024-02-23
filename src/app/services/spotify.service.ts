import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpclient:HttpClient) {
    console.log("spotify service listo")

  }
   getnewerealeses(){

        const headers = new HttpHeaders({
          'Authorization': 'Bearer BQBIX7clfHxBo-swUAP7An-hJ0alsEJWkH99Fjc3D9ORcnT0fWBGWOM9L6LlUXOZBl2-2q8TvGGnQyWjx46iZEbYI5FlqK7aGWsRLq11uAhxn2xeTVs'
        })
       this.httpclient.get('https://api.spotify.com/v1/browse/new-releases', {headers})

   }
}
