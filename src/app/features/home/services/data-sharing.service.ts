import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Color } from 'src/app/shared/color';

@Injectable()
export class DataSharingService {
  /*
    ReplaySubject, which is a special type of Subject that allows you to replay values to new subscribers.
    Responsible for storing the last value emitted by the source Observable and replaying it to new subscribers.
   */
  private _color: ReplaySubject<Color | string>;

  constructor() {
    this._color = new ReplaySubject<Color | string>(0);
  }

  /*
    Method responsible for returning the property contained in the ReplaySubject as observable,
    fired every time a value is updated when a subscribe is made.
   */
  public getData(): Observable<Color | string> {
    return this._color.asObservable();
  }

  /*
    Method responsible for updating the property contained in the ReplaySubject, also responsible
    for triggering the return of the property as observable when subscribed.
   */
  public setData(data: Color | string): void {
    this._color.next(data);
  }
}
