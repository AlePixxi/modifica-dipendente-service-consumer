import { Component, OnInit } from '@angular/core';
import { Dipendente } from '../model/dipendente';
import { ModificaDipendenteService } from '../service/modifica-dipendente.service';
import { ActivatedRoute } from '@angular/router';
import { DipendenteDTO } from '../model/dipendenteDTO';

@Component({
  selector: 'app-modifica-dipendente',
  templateUrl: './modifica-dipendente.component.html',
  styleUrls: ['./modifica-dipendente.component.css']
})
export class ModificaDipendenteComponent implements OnInit {

  dipendenteDTO : DipendenteDTO;
  dipendente : Dipendente;

  constructor(private modificaDipendenteService : ModificaDipendenteService, private route : ActivatedRoute) {
    this.dipendente = new Dipendente();
    this.dipendenteDTO = new DipendenteDTO("");
  }

  ngOnInit(): void {

    this.dipendenteDTO.codiceFiscale = this.route.snapshot.params["codiceFiscale"];
    console.log(this.dipendenteDTO);

    this.modificaDipendenteService.trovaDipendente(this.dipendenteDTO).
    subscribe({
      next: (data) => {
        this.dipendente = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onSubmit() : void {
    this.modificaDipendenteService.modificaDipendente(this.dipendente).
    subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }



}
