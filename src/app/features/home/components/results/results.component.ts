import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Color } from 'src/app/shared/color';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResultsComponent {
  @Input() public selectedColor: string | Color = '#ffffff';

  constructor() { }
}
