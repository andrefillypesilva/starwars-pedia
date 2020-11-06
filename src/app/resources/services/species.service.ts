import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getSpecies(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('assets/mocks/results.json');
  }
}
