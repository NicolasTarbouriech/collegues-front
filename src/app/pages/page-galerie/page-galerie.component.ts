import { Component, OnInit } from '@angular/core';
import { CollegueGalerie } from 'src/app/models/CollegueGalerie';
import { Collegue } from 'src/app/models/Collegues';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-page-galerie',
  templateUrl: './page-galerie.component.html',
  styleUrls: ['./page-galerie.component.css']
})

export class PageGalerieComponent implements OnInit {

  CollegueGalerieTab : CollegueGalerie [] = [];

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.dataSrv.AfficherPhotoDesCollegues().subscribe(
      CollegueGalerie => this.CollegueGalerieTab.push(CollegueGalerie)
    );
  }

}
