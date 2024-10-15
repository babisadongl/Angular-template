import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = 'Please enter value';
  @Input() control: any;
  @Input() disabled: boolean = false;
  @Input() id: string | undefined = '';
  @Input() maxlength: number;
  @Input() minlength: number = 5;
  @Input() inputType: string = '';
  @Input() label: string = '';
  @Input() mask: any;
  @Input() dropSpecialCharacters: boolean = true;
  @Input() readonly: boolean = false;
  @Input() pattern: any;
  @Input() required: boolean = true;
  @Input() inputClass: any;
  @Input() labelClass: any;
  @Input() form: FormGroup;
  @Input() errorMsg: any = [
    {name: 'required', value: 'Please enter the value'},
    {name: 'pattern', value: 'Invalid pattern'},
    {name: 'minlength', value: 'Minimum length error'},
  ];
  @Input() successMsg: string = 'Input valid';
  @Input() showValidation: boolean = false;

  @Output() inputValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * To emit the changes value
   * @param event
   */
  valueChange(event: any) {
    this.inputValue.emit(event);
  }
}
