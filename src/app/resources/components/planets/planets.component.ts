import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html'
})
export class PlanetsComponent implements OnInit {

  public planets$: Observable<ResultCard[]>;

  constructor(
    private readonly planetService: PlanetService
  ) { }

  ngOnInit(): void {
    this.planets$ = this.planetService.getPlanets();
  }

}
