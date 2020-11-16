import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  onOpenPerson(id: number): void {
    // implement getById here
  }

}
