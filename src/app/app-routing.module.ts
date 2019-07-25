import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'planets',
    component: PlanetsComponent
  },
  {
    path: 'species',
    component: SpeciesComponent
  },
  {
    path: 'starships',
    component: StarshipsComponent
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
