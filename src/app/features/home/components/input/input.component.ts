import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {
  /*
    The modelBind property is used to bind the input to the template.
    The modelBind property is set to the data that is received from the DataSharingService.
    The data is received from the DataSharingService when the user selects a color from the dropdown.
    The data is received from the DataSharingService when the user enters a custom color.
   */
  @Input() public modelBind!: string;

  /*
    The modelBindChange property is used to emit the data that is received from the DataSharingService.
    The data is received from the DataSharingService when the user selects a color from the dropdown.
    The data is received from the DataSharingService when the user enters a custom color.
   */
  @Output() public modelBindChange: EventEmitter<string>;

  constructor() {
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
