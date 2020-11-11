import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Species } from 'src/app/models/interfaces/species';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getSpecies(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>(`${environment.swapi}species/`)
    .pipe(
      pluck('results'),
      map((speciesArray: any[]) => {
        return speciesArray.map((species: Species) => ({
          id: parseInt(species.url.split('/')[5], 10),
          title: species.name,
          description: `From: ${species.homeworld} - Language: ${species.language}`,
          options: [`Skin Colors: ${species.skin_colors}`, `Hair Colors: ${species.hair_colors}`, `Eye Colors: ${species.eye_colors}`],
          url: species.url
        }));
      })
    );
  }

  getSpeciesById(id: number): Observable<Species> {
    return this.http.get<Species>(`${environment.swapi}species/${id}`);
  }
}
