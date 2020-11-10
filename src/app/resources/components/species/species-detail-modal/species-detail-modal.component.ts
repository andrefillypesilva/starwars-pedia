import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAbstractComponent } from 'src/app/models/abstracts/modal-abstract-component';
import { Species } from 'src/app/models/interfaces/species';

@Component({
  selector: 'app-species-detail-modal',
  templateUrl: './species-detail-modal.component.html'
})
export class SpeciesDetailModalComponent extends ModalAbstractComponent<Species> {

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
        title: 'Classification',
        value: this.object.classification
      },
      {
        title: 'Designation',
        value: this.object.designation
      },
      {
        title: 'Average Height',
        value: this.object.average_height
      },
      {
        title: 'Average Lifespan',
        value: this.object.average_lifespan
      },
      {
        title: 'Eye Colors',
        value: this.object.eye_colors
      },
      {
        title: 'Hair Colors',
        value: this.object.hair_colors
      },
      {
        title: 'Skin Colors',
        value: this.object.skin_colors
      },
      {
        title: 'Language',
        value: this.object.language
      },
      {
        title: 'Homeworld',
        value: this.object.homeworld
      }
    ];
  }

}
