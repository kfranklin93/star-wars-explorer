import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  films:any;

  ngOnInit() {
    this.films = this.moviesService.getFilms().subscribe((data) => this.films = { ...data });

  }
  // ngOnDestroy(){

  // }

}
