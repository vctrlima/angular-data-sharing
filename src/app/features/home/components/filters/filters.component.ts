import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/shared/color';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() public colors: Color[] | null;

  public presetColorBind!: string;
  public customColorBind!: string;

  constructor(
    private dataSharingService: DataSharingService,
  ) {
    this.colors = new Array<Color>();
  }

  public ngOnInit(): void { }

  public setPresetColorOnFilter(): void {
    this.customColorBind = '';
    this.dataSharingService.setData(this.presetColorBind);
  }

  public setCustomColorOnFilter(): void {
    this.presetColorBind = '';
    this.dataSharingService.setData(this.customColorBind);
  }
}
