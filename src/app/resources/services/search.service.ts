import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Film } from 'src/app/models/interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private readonly http: HttpClient
  ) { }

  search(search: string): Observable<ResultCard[]> {
    const queryParams = new HttpParams().append('search', search);
    return this.http.get<ResultCard[]>(`${environment.swapi}films`, { params: queryParams })
    .pipe(
      pluck('results'),
      map((results: any[]) => {
        return results.map((result: Film) => ({
          id: parseInt(result.url.split('/')[5], 10),
          title: result.title,
          description: result.opening_crawl,
          options: [result.director, result.producer],
          url: result.url
        }));
      })
    );
  }

  getResultById(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.swapi}films/${id}`);
  }
}
