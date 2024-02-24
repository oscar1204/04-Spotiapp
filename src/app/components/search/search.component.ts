import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  artistas:any[]=[];
constructor(private sfotify:SpotifyService){

}
buscar(termimo:string){
   console.log(termimo)
   this.sfotify.getartistas(termimo)
       .subscribe((data:any)=>{
        console.log(data.artists.items)
        this.artistas= data.artists.items
       })
}




}
