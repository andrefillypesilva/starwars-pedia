import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Film } from 'src/app/models/interfaces/film';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { FilmService } from '../../services/film.service';
import { FilmDetailModalComponent } from './film-detail-modal/film-detail-modal.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {

  public films$: Observable<ResultCard[]>;

  constructor(
    private readonly filmService: FilmService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.films$ = this.filmService.getFilms();
  }

  onOpenFilm(id: number): void {
    this.filmService.getFilmById(id).subscribe((film: Film) => {
      const modal = this.modalService.open(FilmDetailModalComponent);
      modal.componentInstance.object = {
        title: film.title,
        episode_id: film.episode_id,
        opening_crawl: film.opening_crawl,
        director: film.director,
        producer: film.producer,
        release_date: film.release_date,
        url: film.url
      };
    });
  }
}
