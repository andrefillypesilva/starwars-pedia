import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getFilms(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('assets/mocks/results.json');
  }
}
