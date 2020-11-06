import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-block',
  templateUrl: './result-block.component.html'
})
export class ResultBlockComponent implements OnInit {

  @Input() results$;

  constructor() { }

  ngOnInit(): void {
  }

}
