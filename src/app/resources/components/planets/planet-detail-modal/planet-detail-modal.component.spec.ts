import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailModalComponent } from './planet-detail-modal.component';

describe('PlanetDetailModalComponent', () => {
  let component: PlanetDetailModalComponent;
  let fixture: ComponentFixture<PlanetDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
