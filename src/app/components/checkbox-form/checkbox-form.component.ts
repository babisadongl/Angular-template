import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'src/app/services';

@Component({
  selector: 'app-checkbox-form',
  templateUrl: './checkbox-form.component.html',
  styleUrls: ['./checkbox-form.component.scss'],
})
export class CheckboxFormComponent implements OnInit {
  //#region Instantiating variables
  checkboxForm: FormGroup;

  constructor(private fb: FormBuilder, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.setForm();
  }

  /**
   * Set checkbox form
   */
  setForm = (): void => {
    this.checkboxForm = this.fb.group({
      angular: [false, Validators.requiredTrue],
    });
  };

  /**
   * Test function to check if form is valid on submit
   */
  submit = (): void => {
    if (this.checkboxForm.invalid) {
      this.toastrService.showWarning('Invalid input');
      return;
    }
    this.toastrService.showSuccess('Valid input');
  };

  onValueChange = (event: any): any => {
    //TODO: Value subscribed from shared component. Please remove console on usage and write your code here
    console.log(event);
  };
}
