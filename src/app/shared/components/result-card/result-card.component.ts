import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResultCard } from 'src/app/models/interfaces/result-card';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html'
})
export class ResultCardComponent implements OnInit {

  @Input() public object: ResultCard;
  @Output() public openResult = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenResult(): void {
    this.openResult.emit(this.object.id);
  }

}
