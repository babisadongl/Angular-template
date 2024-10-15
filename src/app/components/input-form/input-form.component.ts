import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PatternConstants} from 'src/app/constants';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  inputForm: FormGroup;
  showValidation = false;
  pattern = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setInputForm();
  }

  setInputForm() {
    this.inputForm = this.formBuilder.group({
      name: new FormControl(),
    });
  }

  submit() {
    this.showValidation = true; //SHow error or success msg only after clicking submit button.
  }

  valueChange(event: any) {
    console.log('Input Value', event.target.value);
  }
}
