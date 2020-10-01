import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageAproposComponent } from './pages/page-apropos/page-apropos.component';
import { PageCreerCollegueComponent } from './pages/page-creer-collegue/page-creer-collegue.component';
import { PageGalerieComponent } from './pages/page-galerie/page-galerie.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { GraphiqueComponent } from './graphique/graphique.component';
import { PageGraphiqueComponent } from './pages/page-graphique/page-graphique.component';


const routes: Routes = [
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'galerie', component: PageGalerieComponent },
  { path: 'apropos', component: PageAproposComponent },
  { path: 'creer', component: PageCreerCollegueComponent },
  { path: 'graphique', component: PageGraphiqueComponent},
  { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];


@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    PageAccueilComponent,
    PageAproposComponent,
    PageCreerCollegueComponent,
    PageGalerieComponent,
    MenuComponent,
    GraphiqueComponent,
    PageGraphiqueComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    NgbModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
