import { Component, OnInit } from '@angular/core';
import { Contratos } from '../model/contratos';
import { ContratoService } from '../services/contrato.service';

@Component({
  selector: 'app-registro-contrato',
  templateUrl: './registro-contrato.component.html',
  styleUrls: ['./registro-contrato.component.css']
})
export class RegistroContratoComponent implements OnInit {

  contrato : Contratos;

  constructor(private contratoService: ContratoService) {
    this.contrato= new Contratos();
   }

  ngOnInit(): void {
  }

  add(){
    this.contratoService.post(this.contrato);
  }

}
