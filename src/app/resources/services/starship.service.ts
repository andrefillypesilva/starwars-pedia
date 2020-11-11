import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Starship } from 'src/app/models/interfaces/starship';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getStarships(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>(`${environment.swapi}starships/`)
    .pipe(
      pluck('results'),
      map((starships: any[]) => {
        return starships.map((starship: Starship) => ({
          id: parseInt(starship.url.split('/')[5], 10),
          title: starship.name,
          description: `Starship Class: ${starship.starship_class}`,
          options: [`Starship Model: ${starship.model}`],
          url: starship.url
        }));
      })
    );
  }

  getStarshipById(id: number): Observable<Starship> {
    return this.http.get<Starship>(`${environment.swapi}starships/${id}`);
  }
}
