import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

<h3>La base es: <strong>{{base}}</strong></h3>

<button (click)="acumular(base)">Aumentar {{base}}</button>

<span>{{numero}}</span>

<button (click)="acumular(-base)">Reducir {{base}}</button>
`

})

export class ContadorComponent{
    title:string = 'Contador';
    numero:number =10;
    base:number =5;
  
    acumular(valor:number){
      this.numero=this.numero+valor;
    
    }
}