import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbDropdownModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { PlanetsComponent } from './planets/planets.component';

import { HttpClientModule } from '@angular/common/http';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ModalContentComponent } from './modal-content/modal-content.component';




@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    MoviesComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    NgbDropdownModule,
    NgbActiveModal,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
