import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Planet } from 'src/app/models/interfaces/planet';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { PlanetService } from '../../services/planet.service';
import { PlanetDetailModalComponent } from './planet-detail-modal/planet-detail-modal.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html'
})
export class PlanetsComponent implements OnInit {

  public planets: ResultCard[];

  constructor(
    private readonly planetService: PlanetService,
    private readonly modalService: NgbModal,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.planets = this.activatedRoute.snapshot.data.planets;
  }

  onOpenPlanet(id: number): void {
    this.planetService.getPlanetById(id).subscribe((planet: Planet) => {
      const modal = this.modalService.open(PlanetDetailModalComponent);
      modal.componentInstance.object = {
        name: planet.name,
        diameter: planet.diameter,
        rotation_period: planet.rotation_period,
        orbital_period: planet.orbital_period,
        gravity: planet.gravity,
        population: planet.population,
        climate: planet.climate,
        terrain: planet.terrain,
        surface_water: planet.surface_water
      };
    });
  }

}
