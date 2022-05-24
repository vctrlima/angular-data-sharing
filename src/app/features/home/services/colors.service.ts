import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/shared/color';

@Injectable()
export class ColorsService {
  public readonly jsonUrl = 'assets/mock/colors.json';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public get(): Observable<Color[]> {
    return this.httpClient.get(this.jsonUrl) as Observable<Color[]>;
  }
}
