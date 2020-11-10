import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesDetailModalComponent } from './species-detail-modal.component';

describe('SpeciesDetailModalComponent', () => {
  let component: SpeciesDetailModalComponent;
  let fixture: ComponentFixture<SpeciesDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
