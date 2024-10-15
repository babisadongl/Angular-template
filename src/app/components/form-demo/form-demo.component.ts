import {Component, OnInit} from '@angular/core';
import {RADIO_OPTIONS} from 'src/app/constants';
import {Fields} from 'src/app/interfaces/fields';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
})
export class FormDemoComponent implements OnInit {
  constructor() {}

  questions: Fields[] = [
    {
      name: 'name',
      id: 'name',
      label: 'Name',
      inputType: 'text',
      controlType: 'input',
      controlName: 'name',
      value: 'Babisha',
      required: true,
      maxlength: 5,
    },
    {
      controlType: 'fieldset',
      controlName: 'addressGroup',
      subQuestions: [
        {
          name: 'address',
          id: 'address',
          label: 'address',
          inputType: 'text',
          controlType: 'input',
          controlName: 'addressLine1',
          value: 'Address Line 1',
          required: true,
        },
        {
          name: 'address',
          id: 'address',
          label: 'address',
          inputType: 'text',
          controlType: 'input',
          controlName: 'addressLine',
          value: 'Address Line',
          required: true,
        },
      ],
    },
    {
      name: 'address',
      id: 'address',
      label: 'address',
      inputType: 'text',
      controlType: 'input',
      controlName: 'address',
      required: true,
    },
    {
      name: 'gender',
      id: 'gender',
      label: 'gender',
      inputType: 'radio',
      controlType: 'radio',
      controlName: 'gender',
      options: RADIO_OPTIONS.GENDER,
      value: 'M',
    },
  ];

  ngOnInit(): void {}
}
