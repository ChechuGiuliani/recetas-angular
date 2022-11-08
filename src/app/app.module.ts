import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from './shared/components/card/card.component'; 
import { MaterialModule } from './shared/modules/material/material.module';
import { RecetasComponent } from './shared/components/recetas/recetas.component';
import { AgregarRecetaComponent } from './shared/components/agregar-receta/agregar-receta.component';

import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RecetasComponent,
    AgregarRecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

