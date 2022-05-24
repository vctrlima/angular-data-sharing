import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/shared/color';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() public modelBind!: string;
  @Input() public modelOptions: Color[] | null;
  @Output() public modelBindChange: EventEmitter<string>;

  constructor() {
    this.modelOptions = new Array<Color>();
    this.modelBindChange = new EventEmitter<string>();
  }

  public ngOnInit(): void { }

  public emitModelBindChange(): void {
    this.modelBindChange.emit(this.modelBind);
  }
}
