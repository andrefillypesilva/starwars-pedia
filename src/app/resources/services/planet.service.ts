import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Planet } from 'src/app/models/interfaces/planet';
import { ResultCard } from 'src/app/models/interfaces/result-card';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getPlanets(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('https://swapi.dev/api/planets/')
    .pipe(
      pluck('results'),
      map((planets: any[]) => {
        return planets.map((planet: Planet) => ({
          id: planet.id,
          title: planet.name,
          description: `Population: ${planet.population}`,
          options: [`Diameter: ${planet.diameter}`, `Population: ${planet.population}`, `Orbital Period: ${planet.orbital_period}`],
          url: planet.url
        }));
      })
    );
  }

  getPlanetById(id: number): Observable<Planet> {
    return this.http.get<Planet>('assets/mocks/planets.json');
  }
}
