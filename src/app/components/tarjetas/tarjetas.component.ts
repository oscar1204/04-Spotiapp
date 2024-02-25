import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: ``
})
export class TarjetasComponent {


  @input() items:any[]=[];

  constructor(){

  }
}
