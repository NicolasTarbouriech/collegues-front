import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

class CollegueGalerie{
  matricule?: string;
  photoUrl?: string;
}
@Component({
  selector: 'app-page-galerie',
  templateUrl: './page-galerie.component.html',
  styleUrls: ['./page-galerie.component.css']
})

export class PageGalerieComponent implements OnInit {

  collegues: CollegueGalerie[];
  erreurTechnique = false;
  pasDeCollegue: boolean;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

}
