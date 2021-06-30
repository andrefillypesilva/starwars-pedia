import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('HomeComponent - Test suit', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [HomeComponent]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should textButton be "May the Force be with me!"', () => {
    expect(component.textButton).toBe('May the Force be with me!');
  });


  it('should change textButton to "Chewbacca" after click and 2 seconds', fakeAsync(() => {
    fixture.detectChanges();
    let buttons = debugElement.queryAll(By.css('.btn-tertiary'));
    console.log(buttons[0].nativeElement.textContent);
    expect(buttons[0].nativeElement.textContent).toBe('May the Force be with me!');

    buttons[0].triggerEventHandler('click', buttons);

    setTimeout(() => {
      fixture.detectChanges();
      expect(buttons[0].nativeElement.textContent).toBe('Chewbacca');
    }, 3000);

    tick(3000);
  }));


});
