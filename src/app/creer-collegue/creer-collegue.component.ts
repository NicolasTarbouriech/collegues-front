import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { CreerCollegueForm } from './creer-collegue-form';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  creerCol: CreerCollegueForm = {
    nom: 'Tarbouriech',
    prenoms: 'Nicolas',
    dateDeNaissance: '1995-03-25',
    email: 'nico@tarbouriech.fr',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' // ??
  };

  erreurTechnique = false;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  creer(): void {
    this.dataSrv.creerCollegue(this.creerCol).subscribe(
      col => {
        this.creerCol = {};
      },
      error => this.erreurTechnique = true
    );
  }

}
