import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() ariaLabel: string = 'Checkbox';
  @Input() checkboxClass: string = '';
  @Input() checked: boolean = false;
  @Input() control: any;
  @Input() defaultValue: any;
  @Input() disabled: boolean = false;
  @Input() id: string = 'checkbox';
  @Input() inline: boolean = false;
  @Input() label: string = 'Select';
  @Input() labelClass: string = '';
  @Input() readonly: boolean = false;
  @Input() validate: boolean = false;
  @Input() showValidationMessage: boolean = false;
  @Input() errorMessage: string = 'Invalid input';
  @Input() successMessage: string = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>(); //using valueChange as EventEmitter instead of change because same name event emits twice

  isInvalid: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // To check validity of checkbox on value change
    this.control?.valueChanges?.subscribe((value: any) => {
      this.validateInput();
      this.valueChange.emit(value); // Emits checkbox value on every change to parents or listeners
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from value changes on component destroy
    this.control?.valueChanges?.unsubscribe();
  }

  validateInput = (): boolean => {
    this.isInvalid =
      this.validate && this.control?.touched && (this.control?.invalid || this.control?.errors);
    return this.isInvalid;
  };
}
