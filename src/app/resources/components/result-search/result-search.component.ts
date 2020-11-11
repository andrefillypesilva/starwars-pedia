import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResultCard } from '../../../models/interfaces/result-card';
import { SearchService } from '../../services/search.service';
import { FilmDetailModalComponent } from '../films/film-detail-modal/film-detail-modal.component';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html'
})
export class ResultSearchComponent implements OnInit {

  public search: string;
  public results$: Observable<ResultCard[]>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly searchService: SearchService,
    private readonly modalService: NgbModal
  ) {
    activatedRoute.queryParams.subscribe((params: Params) => {
      this.search = params.search;
    });
  }

  ngOnInit(): void {
    this.results$ = this.searchService.search(this.search);
  }

  onOpenResult(): void {
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
