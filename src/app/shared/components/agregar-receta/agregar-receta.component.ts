import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecetaService } from 'src/app/features/recetas/receta.service';

@Component({
  selector: 'app-agregar-receta',
  templateUrl: './agregar-receta.component.html',
  styleUrls: ['./agregar-receta.component.css']
})
export class AgregarRecetaComponent implements OnInit {

  formulario: FormGroup
  
  get titulo () {return this.formulario.get("titulo")};
  get descripcion () {return this.formulario.get("descripcion")};
  get imagen () {return this.formulario.get("imagen")};

  constructor(private recetaService:RecetaService ) { }

  ngOnInit(){
    this.formulario = new FormGroup ({
      titulo: new FormControl (""),
      descripcion: new FormControl (""),
      imagen: new FormControl ("")

    })
  console.log(this.recetaService.get())
  }
  onSubmit (){
    this.recetaService.add({
      id: "3",
      title: this.formulario.get('titulo')?.value,
      imagen: this.formulario.get("imagen")?.value,
      descripcion: this.formulario.get ("descripcion")?.value,
      like: false
    })
  }
}