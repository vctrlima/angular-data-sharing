import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/shared/color';
import { ColorsService } from './services/colors.service';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public colors$: Observable<Color[]>;
  public selectedColor!: Color | string;

  constructor(
    private colorService: ColorsService,
    private dataSharingService: DataSharingService,
  ) {
    this.colors$ = new Observable<Color[]>();
  }

  public ngOnInit(): void {
    this.getColors();
    this.initializeSubscriptions();
  }

  private getColors(): void {
    this.colors$ = this.colorService.get();
  }

  private initializeSubscriptions(): void {
    this.dataSharingService.setData(this.selectedColor);

    this.dataSharingService.getData().subscribe((data: Color | string) => {
      this.selectedColor = data;
    });
  }
}
