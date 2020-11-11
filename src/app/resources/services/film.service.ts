import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Film } from 'src/app/models/interfaces/film';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private readonly http: HttpClient) {}

  getFilms(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>(`${environment.swapi}films`).pipe(
      pluck('results'),
      map((films: any[]) => {
        return films.map((film: Film) => ({
          id: parseInt(film.url.split('/')[5], 10),
          title: `${film.title}  | Episode ${film.episode_id}`,
          description: film.opening_crawl,
          options: [film.director, film.producer],
          url: film.url,
        }));
      })
    );
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.swapi}films/${id}`);
  }
}
