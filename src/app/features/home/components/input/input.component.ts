import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() public modelBind!: string;
  @Output() public modelBindChange: EventEmitter<string>;

  constructor() {
    this.modelBindChange = new EventEmitter<string>();
  }

  public ngOnInit(): void { }

  public emitModelBindChange(): void {
    this.modelBindChange.emit(this.modelBind);
  }
}
