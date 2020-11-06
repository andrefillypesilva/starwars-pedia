import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  public people$: Observable<ResultCard[]>;

  constructor(
    private readonly personService: PersonService
  ) { }

  ngOnInit(): void {
    this.people$ = this.personService.getPeople();
  }

}
