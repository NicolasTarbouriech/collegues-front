import { Component } from '@angular/core';
// récuperation de l'objet collegueMock
import { collegueMock, collegueMock2} from './mock/collegues.mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  // propriété collegueMock qui récupère les données de collegueMock
  collegueExemple = collegueMock;
  collegueExemple2 = collegueMock2;

  title = 'collegues-front';
}
