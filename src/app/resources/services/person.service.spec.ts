import { TestBed } from "@angular/core/testing";
import { PersonService } from './person.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from "src/environments/environment";
import { PEOPLE } from '../mocks/people.mock';
import { PERSON } from '../mocks/person.mock';
import { LogMessageService } from "./log-message.service";

describe('PersonService - Test suit', () => {
  let service: PersonService;
  let httpTestingController: HttpTestingController;
  let loggerSpy;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LogMessageService', ['createLog']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PersonService,
        {
          provide: LogMessageService,
          useValue: loggerSpy
        }
      ]
    });

    service = TestBed.inject(PersonService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create an instance of this service', () => {
    expect(service).toBeTruthy();
  });

  it('should return all people', () => {
    service.getPeople().subscribe(people => {
      expect(people).toBeTruthy();
      expect(people[0].title).toBe('Luke Skywalker');
      expect(loggerSpy.createLog).toHaveBeenCalledTimes(1);
    });

    const req = httpTestingController.expectOne(`${environment.swapi}people`);
    expect(req.request.method).toBe('GET');
    req.flush(PEOPLE);
  });

  it('should retrieve C3-PO', () => {
    service.getPersonById(2).subscribe(person => {
      expect(person).toBeTruthy('No people returned!');

      expect(person.name).toBe('C-3PO');
    });

    const req = httpTestingController.expectOne(`${environment.swapi}people/2`);

    expect(req.request.method).toBe('GET');

    req.flush(PERSON);
  });

  it('should handle error', () => {
    service.getPersonById(2).subscribe(
      () => fail('It should handle an error, but it does not!'),
      (error => {
        expect(error.status).toBe(500)
      })
    );

    const req = httpTestingController.expectOne(`${environment.swapi}people/2`);

    expect(req.request.method).toBe('GET');

    req.flush('Fail to get people', { status: 500, statusText: 'Internal error' });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
