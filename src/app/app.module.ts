import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { PlanetsComponent } from './planets/planets.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    MoviesComponent,
    PlanetsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbDropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
