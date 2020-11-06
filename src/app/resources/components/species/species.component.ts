import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html'
})
export class SpeciesComponent implements OnInit {

  public species$: Observable<ResultCard[]>;

  constructor(
    private readonly speciesService: SpeciesService
  ) { }

  ngOnInit(): void {
    this.species$ = this.speciesService.getSpecies();
  }

}
