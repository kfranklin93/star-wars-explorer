import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StarshipsService } from "./starships.service";
import { ModalContentComponent } from "../modal-content/modal-content.component";

@Component({
  selector: "app-starships",
  templateUrl: "./starships.component.html",
  styleUrls: ["./starships.component.css"]
})
export class StarshipsComponent implements OnInit {
  constructor(
    private starshipsService: StarshipsService,
    private modalService: NgbModal
  ) {}

  starships: any;
  starshipDetails: any;

  displayStarshipDetails(movie: any) {
    this.starshipDetails = movie;
    const modalRef = this.modalService.open(ModalContentComponent, {
      scrollable: true
    });
    modalRef.componentInstance.data = this.starshipDetails;

  }


  ngOnInit() {
    this.starships = this.starshipsService
      .getStarships()
      .subscribe(data => (this.starships = { ...data }));
  }
  // ngOnDestroy(){

  // }
}
