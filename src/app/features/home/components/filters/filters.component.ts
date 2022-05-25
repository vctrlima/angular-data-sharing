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
  /*
    The selected color is set to the data that is received from the DataSharingService.
    The data is received from the DataSharingService when the user selects a color from the dropdown.
    The data is received from the DataSharingService when the user enters a custom color.
   */
  @Input() public presetColors: Color[] | null;

  public presetColorBind!: string;

  /*
    The customColorBind property is used to bind the input to the template.
    The customColorBind property is set to the data that is received from the DataSharingService.
    The data is received from the DataSharingService when the user selects a color from the dropdown.
   */
  @Input() public customColorBind!: string;

  constructor(
    private dataSharingService: DataSharingService,
  ) {
    this.presetColors = new Array<Color>();
  }

  public ngOnInit(): void { }

  /*
    Function that updates the property value in the service, re-triggers subscribers from
    other components, and makes data sharing work.
   */
  public setPresetColorOnFilter(): void {
    this.customColorBind = this.presetColorBind;
    this.dataSharingService.setData(this.presetColorBind);
  }

  /*
    Function that updates the property value in the service, re-triggers subscribers from
    other components, and makes data sharing work.
   */
  public setCustomColorOnFilter(): void {
    this.presetColorBind = '';
    this.dataSharingService.setData(this.customColorBind);
  }
}
