import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Color } from 'src/app/shared/color';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent {
  /*
    The modelOptions property is used to bind the dropdown to the template.
    The modelOptions property is set to the data that is received from the DataSharingService.
    The data is received from the DataSharingService when the user selects a color from the dropdown.
    The data is received from the DataSharingService when the user enters a custom color.
   */
  @Input() public modelBind!: string;
  @Input() public modelOptions: Color[] | null;

  /*
    The modelOptionsChange property is used to emit the data that is received from the DataSharingService.
    The data is received from the DataSharingService when the user selects a color from the dropdown.
    The data is received from the DataSharingService when the user enters a custom color.
   */
  @Output() public modelBindChange: EventEmitter<string>;

  constructor() {
    this.modelOptions = new Array<Color>();
    this.modelBindChange = new EventEmitter<string>();
  }

  /*
    Function that will output the value of the control property, making the two-way data binding work
    correctly.
   */
  public emitModelBindChange(): void {
    this.modelBindChange.emit(this.modelBind);
  }
}
