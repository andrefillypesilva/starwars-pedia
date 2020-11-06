import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html'
})
export class StarshipsComponent implements OnInit {

  public starships$: Observable<ResultCard[]>;

  constructor(
    private readonly sharshipService: StarshipService
  ) { }

  ngOnInit(): void {
    this.starships$ = this.sharshipService.getStarships();
  }

}
