import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificaDipendenteComponent } from './modifica-dipendente/modifica-dipendente.component';

const routes: Routes = [
  {path: 'modificaDipendente/:codiceFiscale', component: ModificaDipendenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
