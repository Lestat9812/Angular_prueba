import {Component} from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroes.component.html'
})

export class HeroeComponent{
    nombre:string='Iron Man';
    edad:number=50;
    serie:string='The Invincible Iron Man'

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre(){
        this.nombre='Dai';
    }

    cambiarEdad(){
        this.edad=12;
    }

    cambiarSerie(){
        this.serie='Dai no Daibouken'
    }

}