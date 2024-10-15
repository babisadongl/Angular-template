import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'src/app/services';
import {RADIO_OPTIONS} from '../../constants';

@Component({
  selector: 'app-radio-form',
  templateUrl: './radio-form.component.html',
  styleUrls: ['./radio-form.component.scss'],
})
export class RadioFormComponent implements OnInit {
  //#region Instantiating variables
  radioForm: FormGroup;
  genderOptions = RADIO_OPTIONS.GENDER;

  constructor(private fb: FormBuilder, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.setForm();
  }

  /**
   * Set radio form
   */
  setForm = (): void => {
    this.radioForm = this.fb.group({
      gender: ['', Validators.required],
    });
  };

  /**
   * Test function to check if form is valid on submit
   */
  submit = (): void => {
    if (this.radioForm.invalid) {
      this.toastrService.showWarning('Please select any one option');
      return;
    }
    this.toastrService.showSuccess('Success');
  };

  onValueChange = (event: any): any => {
    //TODO: Value subscribed from shared component. Please remove console on usage and write your code here
    console.log(event);
  };
}
