import {Directive, Self, HostListener} from '@angular/core';
import {ControlContainer} from '@angular/forms';

@Directive({
  selector: 'form[formGroup]',
})
export class MarkAllAsTouchedDirective {
  /**
   * This directive is called on submit action of form with formGroup.
   * You do not need to call this directive explicitly.
   * markAllAsTouched() function marks the control and all its descendant controls as touched for validation checks
   * enable() function enables the control. This means the control is included in validation checks and the aggregate value of its parent. Its status recalculates based on its value and its validators
   */
  @HostListener('submit')
  public onSubmit(): void {
    this.container?.control?.markAllAsTouched();
    this.container?.control?.enable();
  }

  constructor(@Self() private container: ControlContainer) {}
}
