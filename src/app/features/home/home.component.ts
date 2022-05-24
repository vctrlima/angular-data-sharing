import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/shared/color';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public colors$: Observable<Color[]>;

  constructor(
    private colorService: ColorsService
  ) {
    this.colors$ = new Observable<Color[]>();
  }

  public ngOnInit(): void {
    this.getColors();
  }

  private getColors(): void {
    this.colors$ = this.colorService.get();
  }
}
