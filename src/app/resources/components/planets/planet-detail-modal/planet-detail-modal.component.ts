import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAbstractComponent } from 'src/app/models/abstracts/modal-abstract-component';
import { Planet } from 'src/app/models/interfaces/planet';

@Component({
  selector: 'app-planet-detail-modal',
  templateUrl: './planet-detail-modal.component.html'
})
export class PlanetDetailModalComponent extends ModalAbstractComponent<Planet> {

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
        title: 'Diameter',
        value: this.object.diameter
      },
      {
        title: 'Rotation Period',
        value: this.object.rotation_period
      },
      {
        title: 'Orbital Period',
        value: this.object.orbital_period
      },
      {
        title: 'Gravity',
        value: this.object.gravity
      },
      {
        title: 'Population',
        value: this.object.population
      },
      {
        title: 'Climate',
        value: this.object.climate
      },
      {
        title: 'Terrain',
        value: this.object.terrain
      },
      {
        title: 'Surface Water',
        value: this.object.surface_water
      }
    ];
  }

}
