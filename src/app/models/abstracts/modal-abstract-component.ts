import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TableInfo } from '../interfaces/table-info';

@Component({
    template: ''
})
export abstract class ModalAbstractComponent<T> implements OnInit {

    @Input() public object: T;
    public data: TableInfo[];

    constructor(
        protected readonly activeModal: NgbActiveModal
    ) { }

    ngOnInit(): void {
        this.setTable();
    }

    abstract setTable(): void;

    onClose(): void {
        this.activeModal.close();
    }
}
