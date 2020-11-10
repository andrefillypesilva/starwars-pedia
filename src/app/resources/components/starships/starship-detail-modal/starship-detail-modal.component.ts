import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAbstractComponent } from 'src/app/models/abstracts/modal-abstract-component';
import { Starship } from 'src/app/models/interfaces/starship';

@Component({
  selector: 'app-starship-detail-modal',
  templateUrl: './starship-detail-modal.component.html'
})
export class StarshipDetailModalComponent extends ModalAbstractComponent<Starship> {

  constructor(
    readonly activeModal: NgbActiveModal
  ) {
    super(activeModal);
  }

  setTable(): void {
    this.data = [
      {
        title: 'Name',
        value: this.object.name
      },
      {
        title: 'Model',
        value: this.object.model
      },
      {
        title: 'Starship Class',
        value: this.object.starship_class
      },
      {
        title: 'Manufacturer',
        value: this.object.manufacturer
      },
      {
        title: 'Cost In Credits',
        value: this.object.cost_in_credits
      },
      {
        title: 'Length',
        value: this.object.length
      },
      {
        title: 'Crew',
        value: this.object.crew
      },
      {
        title: 'Passengers',
        value: this.object.passengers
      },
      {
        title: 'Max Atmosphering Speed',
        value: this.object.max_atmosphering_speed
      },
      {
        title: 'Hyperdrive Rating',
        value: this.object.hyperdrive_rating
      },
      {
        title: 'MGLT',
        value: this.object.MGLT
      },
      {
        title: 'Cargo Capacity',
        value: this.object.cargo_capacity
      },
      {
        title: 'Consumables',
        value: this.object.consumables
      }
    ];
  }

}
