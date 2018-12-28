import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';

import { NgForm } from '@angular/forms';
import { Grupo } from '../../models/grupo';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
  providers: [GrupoService]
})
export class GruposComponent implements OnInit {

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    this.getGruposByCodigoPadre('');
  }

  getGruposByCodigoPadre(codPadre: string){
    this.grupoService.getGruposByCodPadre(codPadre)
      .subscribe(res =>{
        this.grupoService.departamentos = res as Grupo[];
      });
  }

  selectProvincias(){
    this.grupoService.getGruposByCodPadre(this.grupoService.codigoDepartamentoSelected)
      .subscribe(res =>{
        this.grupoService.provincias = res as Grupo[];
        this.grupoService.distritos = null;
        this.grupoService.codigoProvinciaSelected = '0';
        this.grupoService.codigoDistritoSelected = '0';
      });
  }

  selectDistritos(){    
    this.grupoService.getGruposByCodPadre(this.grupoService.codigoProvinciaSelected)
      .subscribe(res =>{
        this.grupoService.distritos = res as Grupo[];
      });
  }
}
