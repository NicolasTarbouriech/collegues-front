import { Component } from '@angular/core';
// récuperation de l'objet collegueMock
import { c1, c2, c3, c4 } from './mock/collegues.mock';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  // propriété collegueMock qui récupère les données de collegueMock
  c1 = c1;
  c2 = c2;
  c3 = c3;
  c4 = c4;

  title = 'collegues-front';
}
