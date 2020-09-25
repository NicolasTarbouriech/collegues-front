import { Component } from '@angular/core';
// récuperation de l'objet collegueMock
import { c1, c2} from './mock/collegues.mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  // propriété collegueMock qui récupère les données de collegueMock
  collegueExemple = c1;
  collegueExemple2 = c2;

  title = 'collegues-front';
}
