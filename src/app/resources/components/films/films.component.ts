import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
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
    console.log(id); // Do search by id
    const modal = this.modalService.open(FilmDetailModalComponent);
    modal.componentInstance.object = {
      title: 'A New Hope',
      episode_id: 4,
      opening_crawl: 'Lorem ipsum dolor sit amet',
      director: 'André Fillype',
      producer: 'Fillype André',
      release_date: '26/09/1994',
      url: 'http://www.google.com'
    };
  }
}
