import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/features/recetas/receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {


constructor (private recetasService: RecetaService) {}

recetasList: any = []

ngOnInit () {
this.recetasList = this.recetasService.get();
console.log(this.recetasList);
}
}