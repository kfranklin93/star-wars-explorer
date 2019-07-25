import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  constructor(
    private planetService: PlanetsService,
    private modalService: NgbModal
  ) {}

  planets: any;
  planetDetails: any;

  displayPlanetDetails(planet: any) {
    this.planetDetails = planet;
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.data = this.planetDetails;
  }

  ngOnInit() {
    this.planets = this.planetService
      .getPlanets()
      .subscribe(data => (this.planets = { ...data }));
  }
}
