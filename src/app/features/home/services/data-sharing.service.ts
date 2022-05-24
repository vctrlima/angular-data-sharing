import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Color } from 'src/app/shared/color';

@Injectable()
export class DataSharingService {
  private _color: ReplaySubject<Color | string>;

  constructor() {
    this._color = new ReplaySubject<Color | string>(0);
  }

  public getData(): Observable<Color | string> {
    return this._color.asObservable();
  }

  public setData(data: Color | string): void {
    this._color.next(data);
  }
}
