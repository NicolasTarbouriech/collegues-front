import { Injectable } from '@angular/core';
import { c2 } from '../mock/collegues.mock';
import { colleguesTab } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegues';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom: string): string[] {
    return colleguesTab.map(c => c.matricule);
  }

  recupererCollegueCourant(): Collegue {
    return c2;
  }
}
