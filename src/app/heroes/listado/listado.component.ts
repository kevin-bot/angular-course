import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', ];
  heroeBorrado:string = '';

  borrarHeroe(heroeIdex:number):void{
    this.heroeBorrado = this.heroes.splice(heroeIdex,1)[0];
  }
}
