import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SWAPI_FILM_API = 'https://swapi.co/api/planets/';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }
  getPlanets() {
    return this.http.get(SWAPI_FILM_API);
  }}
