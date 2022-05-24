import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ColorsService {
  public readonly jsonUrl = 'assets/mock/colors.json';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public get(): Observable<Object> {
    return this.httpClient.get(this.jsonUrl) as Observable<Object>;
  }
}
