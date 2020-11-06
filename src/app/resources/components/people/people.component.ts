import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  public people$: Observable<ResultCard[]>;

  constructor(
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    // this.people$ = this.searchService.search();
  }

}
