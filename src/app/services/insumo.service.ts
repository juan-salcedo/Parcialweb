import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Insumo} from '../model/insumo';
import { ContratoService} from './contrato.service';
import { Contratos } from '../model/contratos';
@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  constructor(private contratoService: ContratoService) { }

  get(): Insumo[]{
    return  JSON.parse(localStorage.getItem('insumos') || '{}');
  }

  post(insumo: Insumo): Observable<any>{
    let contratos = this.contratoService.get();
    let insumos : Insumo[]=[];
    let enc=false;
    var contratoEncontrado= new Contratos();
    if(this.get().length>0){
      insumos=this.get();
    }
    contratos.forEach((c)=>{
      if(c.codigoContrato=insumo.codigoContrato){
        enc=true;
        contratoEncontrado=c;
      }
    })
    if(enc==false){
      alert('No se encontró un contrato con ese código, no se pudo registrar el insumo');
      return of (null);
    }else{
      if(contratoEncontrado.valorContrato<insumo.valorProducto){
        alert('El valor del producto es mayor al valor del contrato');
        return of (null);
      }else{
        contratos.forEach((c)=>{
          if(c.codigoContrato=insumo.codigoContrato){
            c.valorContrato=c.valorContrato-insumo.valorProducto;
          }
        });
        localStorage.setItem('contratos', JSON.stringify(contratos));
        insumos.push(insumo);
        localStorage.setItem('insumos', JSON.stringify(contratos));
        alert('Producto registrado correctamente');
        return of (insumo);
      }
    }
  }
}
