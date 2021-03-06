import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private moviesService: MoviesService, private modalService: NgbModal) {}

  films: any;
  filmDetails: any;


  displayMovieDetails(movie: any) {
    this.filmDetails = movie;
    const modalRef = this.modalService.open(ModalContentComponent, { scrollable: true});
    modalRef.componentInstance.data = this.filmDetails;
    // console.log(this.filmDetails);
  }
  // Make the unordered list elements clickable by turning them into buttons,
  // upon clicking a button have a function in the component that finds the object
  // within the array and display some of the notable attributes in a modal

  ngOnInit() {
    this.films = this.moviesService
      .getFilms()
      .subscribe(data => (this.films = { ...data }));
  }
  // ngOnDestroy(){

  // }
}
