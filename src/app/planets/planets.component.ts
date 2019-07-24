import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private planetService: PlanetsService) { }

  planets: any;

  ngOnInit() {
    this.planets = this.planetService.getPlanets().subscribe((data) => this.planets = { ...data });

  }
}
