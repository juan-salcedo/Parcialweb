import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Contratos} from '../model/contratos';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor() { }

  get(): Contratos[] {
    return JSON.parse(localStorage.getItem('contratos') || '{}');
  }

  post(contrato: Contratos) : Observable<any>{
    let contratos : Contratos[]=[]
    if(this.get().length>0){
      contratos = this.get();
    }
    contratos.push(contrato);
    localStorage.setItem('contratos', JSON.stringify(contratos));
    alert('Contrato creado correctamente');
    return of (contrato);
  }
}
