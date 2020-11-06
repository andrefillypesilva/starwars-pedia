import { Component, OnInit } from '@angular/core';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {

  public films: ResultCard[];

  constructor(
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.films = this.searchService.search();
  }
}
