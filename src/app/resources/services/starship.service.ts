import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Starship } from 'src/app/models/interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getStarships(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('https://swapi.dev/api/starships/')
    .pipe(
      pluck('results'),
      map((starships: any[]) => {
        return starships.map((starship: Starship) => ({
          id: starship.id,
          title: starship.name,
          description: `Starship Class: ${starship.starship_class}`,
          options: [`Starship Model: ${starship.model}`],
          url: starship.url
        }));
      })
    );
  }

  getStarshipById(id: number): Observable<Starship> {
    return this.http.get<Starship>('assets/mocks/starships.json');
  }
}
