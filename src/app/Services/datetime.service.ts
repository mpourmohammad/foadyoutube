import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatetimeService {
  constructor() {}

  datetimeShow() {
    let time = new Date();
    return time;
  }
}
