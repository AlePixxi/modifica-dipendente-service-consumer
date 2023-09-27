import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dipendente } from '../model/dipendente';
import { Observable } from 'rxjs';
import { DipendenteDTO } from '../model/dipendenteDTO';

@Injectable({
  providedIn: 'root'
})
export class ModificaDipendenteService {

  private baseUrl : string = "http://localhost:8771/rest/api/dipendenti";

  constructor(private http : HttpClient) { }

  modificaDipendente(dipendente : Dipendente) : Observable<any> {
    return this.http.put(`${this.baseUrl}/modifica-dipendente`, dipendente);
  }

  trovaDipendente(codiceFiscale : DipendenteDTO) : Observable<any> {
    return this.http.post(`${this.baseUrl}/login-dipendente`, codiceFiscale);
  }

}
