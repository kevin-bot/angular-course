import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    templateUrl:'./contador.component.html'
})
export class ContadorComponent{
    public titulo:string = 'Contador App';
    public numero:number = 0;

    public base:number = 5;

    acumular(n:number){
        this.numero += n;
    }

    aumentarNumero(){
        this.numero = this.numero + 1;
    }

    disminuirNumero(){
        this.numero = this.numero - 1;
    }
}