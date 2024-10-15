import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SharedDataService} from '../../services';
import {Subscription} from 'rxjs';
import {MdbStepperComponent} from 'mdb-angular-ui-kit/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper') stepper: MdbStepperComponent;
  @Input() modalForm: FormGroup;
  options = ['step1', 'step2', 'step3', 'step4'];
  subscription: Subscription;

  constructor(private data: SharedDataService) {}

  ngOnInit(): void {
    this.subscription = this.data.currentOutput.subscribe(event => {
      if (event) {
        this.onStepChange(event);
      }
    });
  }

  /**
   * changes steps to previous or next
   * @param event
   */

  onStepChange(event: any) {
    switch (event) {
      case 'next':
        this.stepper.next();
        break;
      case 'previous':
        this.stepper.previous();
    }
  }
}
