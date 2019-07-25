import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SWAPI_FILM_API = 'https://swapi.co/api/vehicles/';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }
  getVehicles() {
    return this.http.get(SWAPI_FILM_API);
  }
}
