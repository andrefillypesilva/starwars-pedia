import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { StarshipService } from '../services/starship.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipsResolver implements Resolve<ResultCard[]> {

  constructor(
    private readonly starshipService: StarshipService
  ) { }

  resolve(): Observable<ResultCard[]> {
      return this.starshipService.getStarships();
  }

}
