import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SWAPI_FILM_API = 'https://swapi.co/api/films/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  getFilms() {
    return this.http.get(SWAPI_FILM_API);
  }
}
