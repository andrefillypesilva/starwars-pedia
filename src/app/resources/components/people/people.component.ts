import { Component, OnInit } from '@angular/core';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  public people: ResultCard[];

  constructor(
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.people = this.searchService.search();
  }

}
