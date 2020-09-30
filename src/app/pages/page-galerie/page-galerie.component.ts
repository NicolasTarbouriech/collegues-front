import { Component, OnInit } from '@angular/core';
import { CollegueGalerie } from 'src/app/models/CollegueGalerie';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-page-galerie',
  templateUrl: './page-galerie.component.html',
  styleUrls: ['./page-galerie.component.css']
})

export class PageGalerieComponent implements OnInit {

  
  constructor(private dataServ: DataService) { }

  
  allPhotos: CollegueGalerie[] 


  ngOnInit(): void {
    this.dataServ.recupererPhotos().subscribe(
      list=> this.allPhotos = list
    )
  }

}
