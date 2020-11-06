import { Component, Input, OnInit } from '@angular/core';
import { ResultCard } from 'src/app/models/interfaces/result-card';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html'
})
export class ResultCardComponent implements OnInit {

  @Input() object: ResultCard;

  constructor() { }

  ngOnInit(): void {
  }

}
