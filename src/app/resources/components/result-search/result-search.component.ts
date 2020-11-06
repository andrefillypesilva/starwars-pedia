import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultCard } from '../../../models/interfaces/result-card';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html'
})
export class ResultSearchComponent implements OnInit {

  public search: string;
  public results$: Observable<ResultCard[]>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly searchService: SearchService
  ) {
    activatedRoute.queryParams.subscribe((params: Params) => {
      this.search = params.search;
    });
  }

  ngOnInit(): void {
    this.results$ = this.searchService.search(this.search);
  }

}
