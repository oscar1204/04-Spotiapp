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
          'Authorization': 'Bearer BQB5E9QtdhrRsGVsvo_NlwtFZgLqU5fhULMqruw7QESYkSTe0Ai5c54nBsgGIGwkGg8RJrwZ2Rv8G8ErZDisH504K-DF0uXjFknGzKaUjIBXjJ542ms'
        })
       return this.httpclient.get('https://api.spotify.com/v1/browse/new-releases', {headers})

   }
   getartistas(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB5E9QtdhrRsGVsvo_NlwtFZgLqU5fhULMqruw7QESYkSTe0Ai5c54nBsgGIGwkGg8RJrwZ2Rv8G8ErZDisH504K-DF0uXjFknGzKaUjIBXjJ542ms'
    })
   return this.httpclient.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`)

   }
}
