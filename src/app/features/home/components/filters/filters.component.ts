import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Color } from 'src/app/shared/color';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FiltersComponent implements OnInit {
  @Input() public presetColors: Color[] | null;

  public presetColorBind!: string;
  @Input() public customColorBind!: string;

  constructor(
    private dataSharingService: DataSharingService,
  ) {
    this.presetColors = new Array<Color>();
  }

  public ngOnInit(): void { }

  public setPresetColorOnFilter(): void {
    this.customColorBind = this.presetColorBind;
    this.dataSharingService.setData(this.presetColorBind);
  }

  public setCustomColorOnFilter(): void {
    this.presetColorBind = '';
    this.dataSharingService.setData(this.customColorBind);
  }
}
