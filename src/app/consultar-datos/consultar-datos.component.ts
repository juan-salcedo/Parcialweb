import { Component, OnInit } from '@angular/core';
import { Contratos } from '../model/contratos';
import { Insumo } from '../model/insumo';
import { ContratoService } from '../services/contrato.service';
import { InsumoService } from '../services/insumo.service';

@Component({
  selector: 'app-consultar-datos',
  templateUrl: './consultar-datos.component.html',
  styleUrls: ['./consultar-datos.component.css']
})
export class ConsultarDatosComponent implements OnInit {

  contratos: Contratos[]=[];
  insumos: Insumo[]=[];

  constructor(private contratoService: ContratoService, private insumoService : InsumoService) { }

  ngOnInit(): void {
    this.contratos=this.contratoService.get();
    this.insumos=this.insumoService.get();
  }

}
