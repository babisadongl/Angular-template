import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Fields} from '../interfaces/fields';

@Injectable({
  providedIn: 'root',
})
export class QuestionControlService {
  constructor(private fb: FormBuilder) {}

  /**
   * Creates form group
   * @param questions
   * @returns form group
   */
  createFormGroup(questions: Fields[]): FormGroup {
    let group = this.fb.group({});
    questions.forEach(question => {
      if (question.controlType === 'fieldset' && question.subQuestions) {
        const grp = this.createFormGroup(question.subQuestions);
        group.addControl(question.controlName, grp);
      }
      group.addControl(question.controlName, this.createControl(question));
    });
    console.log(group);
    return group;
  }

  /**
   *
   * @param config
   * @returns
   */
  createControl(config: Fields) {
    const {disabled, value} = config;
    return this.fb.control({disabled: disabled, value});
  }
}
