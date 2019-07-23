import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SWAPI_FILM_API = 'https://swapi.co/api/people/';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }
  getPeople() {
    return this.http.get(SWAPI_FILM_API);
  }}
