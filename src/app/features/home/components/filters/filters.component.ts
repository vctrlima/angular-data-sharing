import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/shared/color';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() public colors: Color[] | null;

  public presetColorBind!: Color;
  public customColorBind!: string;

  constructor() {
    this.colors = new Array<Color>();
  }

  public ngOnInit(): void { }
}
