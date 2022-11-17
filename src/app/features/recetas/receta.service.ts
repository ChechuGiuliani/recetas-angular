import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecetaService {
recetas: Receta[] = [{
  id: "1",
  title: " LemonPie",
  imagen: "https://placeralplato.com/files/2015/06/lemon-pie.jpg", 
  like: false
},
{
  id: "2",
  title: " Chocotorta",
  imagen: "https://placeralplato.com/files/2015/06/lemon-pie.jpg",
  like: false
}]

get(){
  return this.recetas; 
}

add( nuevaReceta: Receta) {
  this.recetas.push(nuevaReceta)
}
like (id:string) {
  let receta=this.recetas.find(x=>x.id===id)
  if (receta) receta.like= !receta.like
}
}

export interface Receta {
  id: string;
  title: string;
  imagen: string; 
  descripcion?: string;
  like: boolean;
}
