import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/interfaces/person';
import { ResultCard } from 'src/app/models/interfaces/result-card';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getPeople(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('assets/mocks/people.json');
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>('assets/mocks/people.json');
  }
}
