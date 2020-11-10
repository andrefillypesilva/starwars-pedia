import { Component, Input, OnInit } from '@angular/core';
import { TableInfo } from '../../../models/interfaces/table-info';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html'
})
export class TableInfoComponent implements OnInit {

  @Input() public data: TableInfo[];

  constructor() { }

  ngOnInit(): void {
  }

}
