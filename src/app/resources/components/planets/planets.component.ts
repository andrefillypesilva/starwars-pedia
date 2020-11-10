import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { PlanetService } from '../../services/planet.service';
import { PlanetDetailModalComponent } from './planet-detail-modal/planet-detail-modal.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html'
})
export class PlanetsComponent implements OnInit {

  public planets$: Observable<ResultCard[]>;

  constructor(
    private readonly planetService: PlanetService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.planets$ = this.planetService.getPlanets();
  }

  onOpenPlanet(id: number): void {
    const modal = this.modalService.open(PlanetDetailModalComponent);
    modal.componentInstance.object = {
      name: 'Earth',
      diameter: '12 742 km',
      rotation_period: '24 hours',
      orbital_period: '365 days',
      gravity: '10',
      population: '7 bilions',
      climate: '23',
      terrain: '56',
      surface_water: '78'
    };
  }

}
