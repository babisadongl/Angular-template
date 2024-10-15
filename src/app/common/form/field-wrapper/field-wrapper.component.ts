import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Fields} from 'src/app/interfaces/fields';

@Component({
  selector: 'app-field-wrapper',
  templateUrl: './field-wrapper.component.html',
  styleUrls: ['./field-wrapper.component.scss'],
})
export class FieldWrapperComponent implements OnInit {
  @Input() subQuestions: any; //Subquestions
  @Input() form: FormGroup;
  @Input() controlName: string;

  constructor() {}

  ngOnInit(): void {
    this.form = this.form.controls[this.controlName] as FormGroup;
  }
}
