import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegistroContratoComponent } from './registro-contrato/registro-contrato.component';
import { RegistroInsumoComponent } from './registro-insumo/registro-insumo.component';
import { FormsModule } from '@angular/forms';
import { ConsultarDatosComponent } from './consultar-datos/consultar-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegistroContratoComponent,
    RegistroInsumoComponent,
    ConsultarDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
