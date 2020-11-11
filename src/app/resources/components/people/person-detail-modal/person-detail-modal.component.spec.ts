import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailModalComponent } from './person-detail-modal.component';

describe('PersonDetailModalComponent', () => {
  let component: PersonDetailModalComponent;
  let fixture: ComponentFixture<PersonDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
