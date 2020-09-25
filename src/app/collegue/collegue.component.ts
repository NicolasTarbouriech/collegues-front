import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegues';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  modeAffichage = true;
  modeCreation = false;
  
  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.col = this.dataSrv.recupererCollegueCourant();
  }

  creerColl() {
    console.log('Créer un nouveau collègue');
    this.modeCreation = true;
  }

  modifierColl() {
    this.modeAffichage = false;
  }

  validerColl() {
    this.modeAffichage = true;
  }





}
