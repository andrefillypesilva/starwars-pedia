import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAbstractComponent } from 'src/app/models/abstracts/modal-abstract-component';
import { Vehicle } from 'src/app/models/interfaces/vehicle';

@Component({
  selector: 'app-vehicle-detail-modal',
  templateUrl: './vehicle-detail-modal.component.html'
})
export class VehicleDetailModalComponent extends ModalAbstractComponent<Vehicle> {

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
        title: 'Vehicle Class',
        value: this.object.vehicle_class
      },
      {
        title: 'Manufacturer',
        value: this.object.manufacturer
      },
      {
        title: 'Length',
        value: this.object.length
      },
      {
        title: 'Cost In Credits',
        value: this.object.cost_in_credits
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
