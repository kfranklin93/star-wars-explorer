import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SWAPI_FILM_API = 'https://swapi.co/api/species/';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }
  getSpecies() {
    return this.http.get(SWAPI_FILM_API);
  }}
