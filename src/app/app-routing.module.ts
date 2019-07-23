import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
