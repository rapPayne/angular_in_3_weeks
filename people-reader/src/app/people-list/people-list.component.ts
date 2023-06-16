import { Component, effect } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people = this._peopleService.people;
  person: any;
  constructor(private _peopleService: PeopleService) {
    effect(() => this.person = this.people()[0])
  }

  ngOnInit() {
    this._peopleService.fetchPeople()
  }


}
