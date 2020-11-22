import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Film } from 'src/app/models/interfaces/film';
import { ResultCard } from '../../../models/interfaces/result-card';
import { SearchService } from '../../services/search.service';
import { FilmDetailModalComponent } from '../films/film-detail-modal/film-detail-modal.component';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html'
})
export class ResultSearchComponent implements OnInit {

  public search: string;
  public results: ResultCard[];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly searchService: SearchService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.search = params.search;
      this.searchService.search(this.search).subscribe((results) => {
        this.results = results;
      });
    });
  }

  onOpenResult(id: number): void {
    this.searchService.getResultById(id).subscribe((result: Film) => {
      const modal = this.modalService.open(FilmDetailModalComponent);
      modal.componentInstance.object = {
        title: result.title,
        episode_id: result.episode_id,
        opening_crawl: result.opening_crawl,
        director: result.director,
        producer: result.producer,
        release_date: result.release_date,
        url: result.url
      };
    });
  }

}
