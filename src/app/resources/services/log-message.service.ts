import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogMessageService {

  constructor() { }

  public createLog() {
    console.log(`Log message for getPeople`);
  }
}
