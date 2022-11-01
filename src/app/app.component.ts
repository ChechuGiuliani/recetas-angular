import { Component } from '@angular/core';
import { RecetaService } from './features/recetas/receta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect';

  constructor (private recetasService: RecetaService) {}

  recetasList: any = []

ngOnInit () {
  this.recetasList = this.recetasService.get();
  console.log(this.recetasList);
}
}
