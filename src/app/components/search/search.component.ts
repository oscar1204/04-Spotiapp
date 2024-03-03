import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  artistas:any[]=[];
  loading: boolean | undefined;
constructor(private sfotify:SpotifyService){

}

buscar(termimo:string){
   console.log(termimo);
   this.loading=true;
   this.sfotify.getartistas(termimo)
       .subscribe((data:any)=>{
        this.artistas= data;
        this.loading=false;
       });
}




}
