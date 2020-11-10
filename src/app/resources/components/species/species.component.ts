import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
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
    const modal = this.modalService.open(SpeciesDetailModalComponent);
    modal.componentInstance.object = {
      name: 'Human',
      classification: 'Human',
      designation: 'Human',
      average_height: '1.75',
      average_lifespan: '80 years',
      eye_colors: 'Black/Blue/Green',
      hair_colors: 'Black/Yellow/Red',
      skin_colors: 'Black/White',
      language: 'English',
      homeworld: 'Earth'
    };
  }

}
