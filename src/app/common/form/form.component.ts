import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Fields} from 'src/app/interfaces/fields';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() question: Fields;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  // get isValid() {
  //   return this.form.controls[this.question.label].valid;
  // }
}
