import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgregarRecetaComponent } from './shared/components/agregar-receta/agregar-receta.component';
import { RecetasComponent } from './shared/components/recetas/recetas.component';

const routes: Routes = [
  { 
    path: "home", component: AppComponent
  },
  {
    path: "recetas", component: RecetasComponent
  },
  {
    path: "recetas/agregar", component: AgregarRecetaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
