import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public colors$: Observable<Object>;

  constructor(
    private colorService: ColorsService
  ) {
    this.colors$ = new Observable<Object>();
  }

  public ngOnInit(): void {
    this.getColors();
  }

  private getColors(): void {
    this.colors$ = this.colorService.get();
  }
}
