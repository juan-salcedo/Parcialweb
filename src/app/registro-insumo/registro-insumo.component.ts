import { Component, OnInit } from '@angular/core';
import { Insumo } from '../model/insumo';
import { InsumoService } from '../services/insumo.service';

@Component({
  selector: 'app-registro-insumo',
  templateUrl: './registro-insumo.component.html',
  styleUrls: ['./registro-insumo.component.css']
})
export class RegistroInsumoComponent implements OnInit {
  insumo: Insumo;
  constructor(private insumoService: InsumoService) {
    this.insumo = new Insumo();
   }

   add(){
    this.insumoService.post(this.insumo);
   }

  ngOnInit(): void {
  }

}
