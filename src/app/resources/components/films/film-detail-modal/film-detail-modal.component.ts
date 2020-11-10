import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Film } from '../../../../models/interfaces/film';
import { ModalAbstractComponent } from '../../../../models/abstracts/modal-abstract-component';

@Component({
  selector: 'app-film-detail-modal',
  templateUrl: './film-detail-modal.component.html'
})
export class FilmDetailModalComponent extends ModalAbstractComponent<Film> {

  constructor(
    readonly activeModal: NgbActiveModal
  ) {
    super(activeModal);
  }

  setTable(): void {
    this.data = [
      {
        title: 'Title',
        value: this.object.title
      },
      {
        title: 'Episode',
        value: this.object.episode_id
      },
      {
        title: 'Description',
        value: this.object.opening_crawl
      },
      {
        title: 'Director',
        value: this.object.director
      },
      {
        title: 'Producer',
        value: this.object.producer
      },
      {
        title: 'Release Date',
        value: this.object.release_date
      }
    ];
  }

}
