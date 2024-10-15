import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() radioOptions: Array<any> = [];
  @Input() ariaLabel: string = 'Radio Button';
  @Input() radioClass: string = '';
  @Input() checked: boolean = false;
  @Input() control: any;
  @Input() value: any;
  @Input() disabled: boolean = false;
  @Input() id: string = 'radio';
  @Input() inline: boolean = false;
  @Input() label: string = 'Select';
  @Input() labelClass: string = '';
  @Input() readonly: boolean = false;
  @Input() validate: boolean = false;
  @Input() showValidationMessage: boolean = false;
  @Input() errorMessage: string = 'Select any one option';
  @Input() successMessage: string = '';
  @Input() form: FormGroup;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>(); //using valueChange as EventEmitter instead of change because same name event emits twice

  isInvalid: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // To check validity of radio on value change
    this.control?.valueChanges?.subscribe((value: any) => {
      this.validateInput();
      this.valueChange.emit(value); // Emits radio value on every change to parents or listeners
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
