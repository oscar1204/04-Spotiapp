import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: ``
})
export class ArtistaComponent {
  artista:any= {};

  loadingArtist: boolean;

  constructor(private router:ActivatedRoute,
               private spotify:SpotifyService
     ){
        this.loadingArtist= true;
       this.router.params.subscribe(params=>{
       this.getartista(params['id']);
       });

  }
  getartista( id: string ){
    this.loadingArtist= true;
    this.spotify.getartista(id)
        .subscribe(artista=>{
          console.log(artista);
          this.artista= artista;
          this.loadingArtist= false;
        });
  }


}
