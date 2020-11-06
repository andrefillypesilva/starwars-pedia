import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {

  public films$: Observable<ResultCard[]>;

  constructor(
    private readonly filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.films$ = this.filmService.getFilms();
  }
}
