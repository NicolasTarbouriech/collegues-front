import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegues';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  modeAffichage = true;
  modeCreation = false;
  constructor() { }

  ngOnInit(): void {
  }

  creerCollegue() {
    console.log('Création collègue');
    this.modeCreation = true;
  }

  modifierCollegue(): void {
    this.modeAffichage = false;
  }


  validerCollegue(): void {
    this.modeAffichage = true;
  }



}
