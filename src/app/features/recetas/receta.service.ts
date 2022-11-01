import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class RecetaService {
recetas: any = [{
  id: "1",
  title: " LemonPie",
  imagen: "https://placeralplato.com/files/2015/06/lemon-pie.jpg"
}]

get(){
  return this.recetas; 
}

add( nuevaReceta: any) {
  this.recetas.push(nuevaReceta)
}
}
