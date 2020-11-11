import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from 'src/app/models/interfaces/film';
import { ResultCard } from 'src/app/models/interfaces/result-card';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private readonly http: HttpClient) {}

  getFilms(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('assets/mocks/films.json').pipe(
      map((films: any[]) => {
        return films.map((film: Film) => ({
          id: film.id,
          title: film.title,
          description: film.opening_crawl,
          options: [film.director, film.producer],
          url: film.url,
        }));
      })
    );
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>('assets/mocks/films.json');
  }
}
