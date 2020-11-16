import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/interfaces/person';
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
    this.personService.getPersonById(id).subscribe((person: Person) => {
      const modal = this.modalService.open(PersonDetailModalComponent);
      modal.componentInstance.object = {
        name: person.name,
        birth_year: person.birth_year,
        eye_color: person.eye_color,
        gender: person.gender,
        hair_color: person.hair_color,
        height: person.height,
        mass: person.mass,
        skin_color: person.skin_color,
        homeworld: person.homeworld
      };
    });
  }

}
