import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { Starship } from 'src/app/models/interfaces/starship';
import { StarshipService } from '../../services/starship.service';
import { StarshipDetailModalComponent } from './starship-detail-modal/starship-detail-modal.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html'
})
export class StarshipsComponent implements OnInit {

  public starships$: Observable<ResultCard[]>;

  constructor(
    private readonly starshipService: StarshipService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.starships$ = this.starshipService.getStarships();
  }

  onOpenStarship(id: number): void {
    this.starshipService.getStarshipById(id).subscribe((starship: Starship) => {
      const modal = this.modalService.open(StarshipDetailModalComponent);
      modal.componentInstance.object = {
        name: starship.name,
        model: starship.model,
        starship_class: starship.starship_class,
        manufacturer: starship.manufacturer,
        cost_in_credits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        max_atmosphering_speed: starship.max_atmosphering_speed,
        hyperdrive_rating: starship.hyperdrive_rating,
        MGLT: starship.MGLT,
        cargo_capacity: starship.cargo_capacity,
        consumables: starship.consumables
      };
    });
  }

}
