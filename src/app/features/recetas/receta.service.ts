import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class RecetaService {
recetas: Receta[] = [{
  id: "1",
  title: " LemonPie",
  imagen: "https://placeralplato.com/files/2015/06/lemon-pie.jpg", 
},
{
  id: "2",
  title: " Chocotorta",
  imagen: "https://placeralplato.com/files/2015/06/lemon-pie.jpg"
}]

get(){
  return this.recetas; 
}

add( nuevaReceta: Receta) {
  this.recetas.push(nuevaReceta)
}
}

export interface Receta {
  id: string;
  title: string;
  imagen: string; 
  descripcion?: string;
}
