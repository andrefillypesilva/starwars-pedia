import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { StarshipService } from '../../services/starship.service';
import { StarshipDetailModalComponent } from './starship-detail-modal/starship-detail-modal.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html'
})
export class StarshipsComponent implements OnInit {

  public starships$: Observable<ResultCard[]>;

  constructor(
    private readonly sharshipService: StarshipService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.starships$ = this.sharshipService.getStarships();
  }

  onOpenStarship(): void {
    const modal = this.modalService.open(StarshipDetailModalComponent);
    modal.componentInstance.object = {
      name: 'Millenium Falcon',
      model: 'NHGSGG',
      starship_class: 'Sport',
      manufacturer: '12',
      cost_in_credits: '23',
      length: '34',
      crew: '55',
      passengers: '100',
      max_atmosphering_speed: '1000',
      hyperdrive_rating: '3000',
      MGLT: '213',
      cargo_capacity: '655',
      consumables: 'TRE'
    };
  }

}
