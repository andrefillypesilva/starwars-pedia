import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailModalComponent } from './vehicle-detail-modal.component';

describe('VehicleDetailModalComponent', () => {
  let component: VehicleDetailModalComponent;
  let fixture: ComponentFixture<VehicleDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
