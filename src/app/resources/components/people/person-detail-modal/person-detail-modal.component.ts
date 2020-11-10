import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAbstractComponent } from 'src/app/models/abstracts/modal-abstract-component';
import { Person } from 'src/app/models/interfaces/person';

@Component({
  selector: 'app-person-detail-modal',
  templateUrl: './person-detail-modal.component.html'
})
export class PersonDetailModalComponent extends ModalAbstractComponent<Person> {

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
        title: 'Birth Year',
        value: this.object.birth_year
      },
      {
        title: 'Eye Color',
        value: this.object.eye_color
      },
      {
        title: 'Gender',
        value: this.object.gender
      },
      {
        title: 'Hair Color',
        value: this.object.hair_color
      },
      {
        title: 'Height',
        value: this.object.height
      },
      {
        title: 'Mass',
        value: this.object.mass
      },
      {
        title: 'Skin Color',
        value: this.object.skin_color
      },
      {
        title: 'Homeworld',
        value: this.object.homeworld
      }
    ];
  }

}
