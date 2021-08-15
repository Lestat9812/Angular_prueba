import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Iron Man', 'Hulk', 'Wolverine'];  
  heroeBorrado:string='';

  borrarHeroe(){
    this.heroeBorrado=this.heroes.pop() || '';
    console.log('Borrando...'+' '+this.heroeBorrado);
  }

}
