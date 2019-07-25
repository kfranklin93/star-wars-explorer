import { Component, OnInit } from '@angular/core';
import { SpeciesService } from './species.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  constructor(private speciesService: SpeciesService, private modalService: NgbModal) {}

  species: any;
  speciesDetails: any;

  displaySpeciesDetails(planet: any) {
    this.speciesDetails = planet;
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.data = this.speciesDetails;
  }


  ngOnInit() {
    this.species = this.speciesService
    .getSpecies()
    .subscribe(data => (this.species = { ...data }));
  }
}
