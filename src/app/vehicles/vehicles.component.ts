import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './vehicles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

    constructor(
      private vehiclesService: VehiclesService,
      private modalService: NgbModal
    ) {}

    vehicles: any;
    vehicleDetails: any;

    displayVehicleDetails(vehicle: any) {
      this.vehicleDetails = vehicle;
      const modalRef = this.modalService.open(ModalContentComponent, {
        scrollable: true
      });
      modalRef.componentInstance.data = this.vehicleDetails;

    }


    ngOnInit() {
      this.vehicles = this.vehiclesService
        .getVehicles()
        .subscribe(data => (this.vehicles = { ...data }));
    }

  }
