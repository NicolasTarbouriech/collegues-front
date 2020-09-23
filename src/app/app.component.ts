import { Component } from '@angular/core';
// récuperation de l'objet collegueMock
import { collegueMock } from './mock/collegues.mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // propriété collegueMock qui récupère les données de collegueMock
  collegueExemple = collegueMock;

  title = 'collegues-front';
}
