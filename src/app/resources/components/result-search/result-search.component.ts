import { Component, OnInit } from '@angular/core';
import { ResultCard } from '../../../models/interfaces/result-card';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html'
})
export class ResultSearchComponent implements OnInit {

  public results: ResultCard[];

  constructor(
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.results = this.searchService.search();
  }

}
