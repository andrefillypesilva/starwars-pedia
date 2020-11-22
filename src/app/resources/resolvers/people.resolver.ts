import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { PersonService } from '../services/person.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleResolver implements Resolve<ResultCard[]> {

  constructor(
    private readonly personService: PersonService
  ) { }

  resolve(): Observable<ResultCard[]> {
      return this.personService.getPeople();
  }

}
