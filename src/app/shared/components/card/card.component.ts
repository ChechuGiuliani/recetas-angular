import { Component, Input, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/features/recetas/receta.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private recipeService: RecetaService){}
@Input() title: string;
@Input() subtitle: string;
@Input() imagen: string;
@Input() description: string;

@Input () fav: boolean;
@Input () id: string;

like () {
  if (this.id) this.recipeService.like (this.id)
}
}