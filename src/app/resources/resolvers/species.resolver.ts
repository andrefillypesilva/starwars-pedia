import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { SpeciesService } from '../services/species.service';

@Injectable({
  providedIn: 'root'
})
export class SpeciesResolver implements Resolve<ResultCard[]> {

  constructor(
    private readonly speciesService: SpeciesService
  ) { }

  resolve(): Observable<ResultCard[]> {
      return this.speciesService.getSpecies();
  }

}
