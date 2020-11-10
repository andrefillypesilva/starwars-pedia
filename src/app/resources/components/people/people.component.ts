import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResultCard } from 'src/app/models/interfaces/result-card';
import { PersonService } from '../../services/person.service';
import { PersonDetailModalComponent } from './person-detail-modal/person-detail-modal.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  public people$: Observable<ResultCard[]>;

  constructor(
    private readonly personService: PersonService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.people$ = this.personService.getPeople();
  }

  onOpenPerson(id: number): void {
    const modal = this.modalService.open(PersonDetailModalComponent);
    modal.componentInstance.object = {
      name: 'Luke Skywalker',
      birth_year: '26/09/1994',
      eye_color: 'Brown',
      gender: 'Male',
      hair_color: 'Black',
      height: '1.73',
      mass: '75kg',
      skin_color: 'Brown',
      homeworld: 'Earth'
    };
  }

}
