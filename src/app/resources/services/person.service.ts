import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Person } from 'src/app/models/interfaces/person';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getPeople(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>(`${environment.swapi}people`)
    .pipe(
      pluck('results'),
      map((people: any[]) => {
        return people.map((person: Person) => ({
          id: parseInt(person.url.split('/')[5], 10),
          title: `${person.name}`,
          description: `From: ${person.homeworld} - Birth Year: ${person.birth_year}`,
          options: [`Skin Color: ${person.skin_color}`, `Hair Color: ${person.hair_color}`, `Eye Color: ${person.eye_color}`],
          url: person.url,
        }));
      })
    );
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${environment.swapi}people/${id}`);
  }
}
