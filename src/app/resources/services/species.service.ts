import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Species } from 'src/app/models/interfaces/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getSpecies(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('assets/mocks/species.json')
    .pipe(
      map((speciesArray: any[]) => {
        return speciesArray.map((species: Species) => ({
          id: species.id,
          title: species.name,
          description: `From: ${species.homeworld} - Language: ${species.language}`,
          options: [`Skin Colors: ${species.skin_colors}`, `Hair Colors: ${species.hair_colors}`, `Eye Colors: ${species.eye_colors}`],
          url: species.url
        }));
      })
    );
  }

  getSpeciesById(id: number): Observable<Species> {
    return this.http.get<Species>('assets/mocks/species.json');
  }
}
