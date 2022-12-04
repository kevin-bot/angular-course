import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        //qué cosas contiene este módulo, componenetes, pipe
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        // que cosas quiero hacer visisbles fuera de este modulo
        ListadoComponent
    ],
    imports:[
        // aca usualmente solo van modulos
        CommonModule
    ]
})
export class HeroesModule{

}
