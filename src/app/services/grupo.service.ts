import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  codigoDepartamentoSelected: string;
  codigoProvinciaSelected: string;
  codigoDistritoSelected: string;

  departamentos: Grupo[];
  provincias: Grupo[];
  distritos: Grupo[];

  constructor(private http: HttpClient) {
    this.codigoDepartamentoSelected = '0';
    this.codigoProvinciaSelected = '0';
    this.codigoDistritoSelected = '0';
  }

  getGruposByCodPadre(codPadre: string){
    return this.http.get('http://localhost:8080/api/grupos/get-by-codPadre' + `?codPadre=${codPadre}`);
  }
}
