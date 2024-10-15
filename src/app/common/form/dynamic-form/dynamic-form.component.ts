import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Fields} from 'src/app/interfaces/fields';
import {QuestionControlService} from 'src/app/services';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Fields[];
  form: FormGroup;

  constructor(private questionService: QuestionControlService) {}

  ngOnInit(): void {
    this.form = this.questionService.createFormGroup(this.questions);
  }

  /**
   * Submits form
   */
  onSubmit() {
    // TODO: On submit code
  }
}
