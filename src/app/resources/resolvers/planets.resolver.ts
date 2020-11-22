import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { PlanetService } from '../services/planet.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsResolver implements Resolve<ResultCard[]> {

  constructor(
    private readonly planetService: PlanetService
  ) { }

  resolve(): Observable<ResultCard[]> {
      return this.planetService.getPlanets();
  }

}
