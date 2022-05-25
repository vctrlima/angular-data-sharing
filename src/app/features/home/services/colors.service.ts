import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/shared/color';

@Injectable()
export class ColorsService {
  /*
    URL to access mock data
   */
  public readonly jsonUrl = 'assets/mock/colors.json';

  constructor(
    private httpClient: HttpClient,
  ) { }

  /*
    Method that returns default colors for dropdown filter
   */
  public get(): Observable<Color[]> {
    return this.httpClient.get(this.jsonUrl) as Observable<Color[]>;
  }
}
