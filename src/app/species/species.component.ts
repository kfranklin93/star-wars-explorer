import { Component, OnInit } from '@angular/core';
import { SpeciesService } from './species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  constructor(private speciesService: SpeciesService) {}

  species: any;

  ngOnInit() {
    this.species = this.speciesService
    .getSpecies()
    .subscribe(data => (this.species = { ...data }));
  }
}
