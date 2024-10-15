import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'src/app/services';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss'],
})
export class SelectFormComponent implements OnInit {
  options = [
    {name: 'Opt 1', value: 1, disabled: false},
    {name: 'Opt 2', value: 2, disabled: true},
    {name: 'Opt 3', value: 3, disabled: false},
    {name: 'Opt 4', value: 4, disabled: false},
    {name: 'Opt 5', value: 5, disabled: true},
  ];
  dataKey = 'name';
  selectForm: FormGroup;
  selectClass = '';
  id = 'select';

  constructor(private fb: FormBuilder, private toastrService: ToastrService) {}

  ngOnInit() {
    this.setSelectForm();
  }

  setSelectForm() {
    this.selectForm = this.fb.group({
      singleOptionValue: new FormControl('', [Validators.required]),
      multiOptionValue: new FormControl(),
    });
  }

  submit() {
    if (this.selectForm.invalid) {
      this.toastrService.showWarning('Invalid input');
      return;
    }
    this.toastrService.showSuccess('Valid input');
    console.log('this is form', this.selectForm);
  }

  handleOnChange(event: any) {
    console.log('emitted value', event);
  }
}
