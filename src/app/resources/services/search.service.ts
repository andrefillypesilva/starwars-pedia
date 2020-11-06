import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private readonly http: HttpClient
  ) { }

  search(): Observable<ResultCard[]> {
    return this.http.get<ResultCard[]>('assets/mocks/results.json');
  }
}
