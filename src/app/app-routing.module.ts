import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroContratoComponent } from './registro-contrato/registro-contrato.component';
import { RegistroInsumoComponent } from './registro-insumo/registro-insumo.component';

const routes: Routes = [
  {
    path: 'registroContrato',
    component: RegistroContratoComponent
  },
  {
    path:'registroInsumo',
    component: RegistroInsumoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
