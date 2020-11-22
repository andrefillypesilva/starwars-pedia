import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { FilmService } from '../services/film.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsResolver implements Resolve<ResultCard[]> {

  constructor(
    private readonly filmService: FilmService
  ) { }

  resolve(): Observable<ResultCard[]> {
      return this.filmService.getFilms();
  }

}
