import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {Observable, of, Subject} from 'rxjs';
import {debounceTime, delay, startWith, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  @Input() debounce: number = 250;
  @Input() minChar: number = 2;
  @Input() displayKey: string = 'label';
  @Input() valueKey: string = 'value';
  @Input() fetchList: any;

  @Input() ariaLabel: string = 'Autocomplete';
  @Input() autocompleteClass: string = '';
  @Input() control: any;
  @Input() labelClass: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() label: string = 'Name';
  @Input() id: string = 'autocomplete';
  @Input() inline: boolean = false;
  @Input() validate: boolean = false;
  @Input() showValidationMessage: boolean = false;
  @Input() errorMessage: string = 'Invalid input';
  @Input() successMessage: string = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>(); //using valueChange as EventEmitter instead of change because same name event emits twice

  isInvalid: boolean = false;
  searchText: Subject<string> = new Subject<string>();
  results: Observable<any>;
  notFound: boolean = false;
  loading: boolean = false;
  dataLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.results = this.control?.valueChanges?.pipe(
    this.results = this.searchText.pipe(
      debounceTime(this.debounce),
      startWith(''),
      switchMap((value: string) => this.filter(value, this.control)),
      tap((results: any) => {
        this.notFound = this.dataLoaded && results.length === 0;
      })
    );
    this.control?.valueChanges?.subscribe((value: any) => {
      this.validateInput(this.control);
      this.valueChange.emit(value); // Emits autocomplete value on every change to parents or listeners
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from value changes on component destroy
    this.control?.valueChanges?.unsubscribe();
  }

  /**
   * Hits api if search keyword length is greater than minimum character
   * @param value Search keyword
   * @param control Form control
   * @returns Array of results after hitting api
   */
  filter = (value: string, control: any): any => {
    const filterValue = value ? value.toLowerCase() : '';
    if (
      filterValue.length >= this.minChar &&
      (!control?.value || (control?.value && control.value.toLowerCase() !== filterValue))
    ) {
      this.loading = true;
      return this.fetchList(filterValue).pipe(
        delay(300),
        tap(() => {
          this.loading = false;
          this.dataLoaded = true;
        })
      );
    } else {
      this.loading = false;
      this.dataLoaded = false;
      return of([]);
    }
  };

  /**
   * On autocomplete search box click
   */
  onOpen = (): void => {
    if (!this.dataLoaded && !this.control?.value) {
      this.searchText.next('');
      this.dataLoaded = true;
    }
  };

  /**
   * Validate if control is valid or not
   * @param control Form control
   * @returns boolean
   */
  validateInput = (control: any): boolean => {
    this.isInvalid = this.validate && control?.touched && (control?.invalid || control?.errors);
    return this.isInvalid;
  };

  /**
   * On autocomplete option select
   * @param event Selected option
   */
  onSelect = (event: any) => {
    this.control?.patchValue(null);
    this.control?.patchValue(event?.option?.value);
    // this.validateInput();
    // this.valueChange.emit(event?.option?.value); // Emits selected value on every change to parents or listeners
  };
}
