import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() label: string;
  @Input() options: any;
  @Input() dataKey: any;
  @Input() isMultiple: boolean = false;
  @Input() control: any;
  @Input() selectClass: string = 'col-3 d-flex';
  @Input() id: string = 'select';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() clearButton: boolean = false;
  @Input() showValidationMessage: boolean = false;
  @Input() errorMessage: string = 'Invalid input';
  @Input() successMessage: string = '';
  @Input() form: FormGroup;

  @Output() valueChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.control.markAsTouched();
    console.log('Options', this.options);
  }

  onValueChange(event: any) {
    this.valueChange.emit(event);
  }
}
