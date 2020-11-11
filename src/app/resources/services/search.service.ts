import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Film } from 'src/app/models/interfaces/film';
import { ReplaceAllPipe } from 'src/app/shared/pipes/replace-all.pipe';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private replaceAll = new ReplaceAllPipe();

  constructor(
    private readonly http: HttpClient
  ) { }

  search(search: string): Observable<ResultCard[]> {
    const queryParams = new HttpParams().append('search', search);
    return this.http.get<ResultCard[]>(`${environment.swapi}films`, { params: queryParams })
    .pipe(
      pluck('results'),
      map((results: any[]) => {
        const replaceTerm = `<span class="result-card__result-key">${search}</span>`;
        return results.map((result: Film) => ({
          id: parseInt(result.url.split('/')[5], 10),
          title: this.replaceAll.transform(result.title, search, replaceTerm),
          description: this.replaceAll.transform(result.opening_crawl, search, replaceTerm),
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
