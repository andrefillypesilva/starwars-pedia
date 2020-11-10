import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  @Input() public title: string;
  @Input() public data: any;
  @Output() public closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closeModal.emit();
  }

}
