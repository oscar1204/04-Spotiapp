import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  nuevasCanciones:any[]=[]

 constructor(private spotifay:SpotifyService){
    this.spotifay.getnewerealeses()
        .subscribe ((data:any)=>{

          this.nuevasCanciones=data
        });
}
}
