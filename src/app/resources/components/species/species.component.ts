import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Species } from 'src/app/models/interfaces/species';
import { SpeciesService } from '../../services/species.service';
import { SpeciesDetailModalComponent } from './species-detail-modal/species-detail-modal.component';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html'
})
export class SpeciesComponent implements OnInit {

  public species$: Observable<ResultCard[]>;

  constructor(
    private readonly speciesService: SpeciesService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.species$ = this.speciesService.getSpecies();
  }

  onOpenSpecies(id: number): void {
    this.speciesService.getSpeciesById(id).subscribe((species: Species) => {
      const modal = this.modalService.open(SpeciesDetailModalComponent);
      modal.componentInstance.object = {
        name: species.name,
        classification: species.classification,
        designation: species.designation,
        average_height: species.average_height,
        average_lifespan: species.average_lifespan,
        eye_colors: species.eye_colors,
        hair_colors: species.hair_colors,
        skin_colors: species.skin_colors,
        language: species.language,
        homeworld: species.homeworld
      };
    });
  }

}
