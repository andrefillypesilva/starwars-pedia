import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-block',
  templateUrl: './result-block.component.html'
})
export class ResultBlockComponent implements OnInit {

  @Input() results;

  @Output() openResult = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpenResult(id: number): void {
    this.openResult.emit(id);
  }

}
