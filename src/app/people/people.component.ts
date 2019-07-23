import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  people: any;

  ngOnInit() {
    this.people = this.peopleService.getPeople().subscribe((data) => this.people = { ...data });

  }

}
