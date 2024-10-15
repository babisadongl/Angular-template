import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {AutocompleteService, ToastrService} from 'src/app/services';

@Component({
  selector: 'app-autocomplete-form',
  templateUrl: './autocomplete-form.component.html',
  styleUrls: ['./autocomplete-form.component.scss'],
})
export class AutocompleteFormComponent implements OnInit {
  //#region Instantiating variables
  autocompleteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private autocompleteService: AutocompleteService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  /**
   * Set checkbox form
   */
  setForm = (): void => {
    this.autocompleteForm = this.fb.group({
      name: ['', Validators.required],
    });
  };

  /**
   * Test function to check if form is valid on submit
   */
  submit = (): void => {
    if (this.autocompleteForm.invalid) {
      this.toastrService.showWarning('Invalid input');
      return;
    }
    this.toastrService.showSuccess('Valid input');
  };

  /**
   * On value change from shared component
   * @param event
   */
  onValueChange = (event: any): any => {
    //TODO: Value subscribed from shared component. Please remove console on usage and write your code here
    console.log('autocomplete form onValueChange', event);
    console.log('autcomplete form value', this.autocompleteForm.value);
  };

  /**
   * To fetch the autocomplete list filtered by search text through api
   * @param event
   */
  fetchAutocompleteList = (filterValue: any) => {
    return this.autocompleteService.get(filterValue).pipe(
      map((data: any) => {
        return data.results;
      })
    );
  };
}
