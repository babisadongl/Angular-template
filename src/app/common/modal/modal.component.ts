import {Component, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '../../services/toastr.service';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {SharedDataService} from 'src/app/services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Output() close = new EventEmitter<any>();

  data: any = [];
  modalHeader: string;
  baseActions: any;
  addTableRowForm: FormGroup;
  bodyContentConstants: string = '';
  options = [
    {label: 'System Architect', value: 'System Architect', disabled: false},
    {label: 'Software Engineer', value: 'Software Engineer', disabled: false},
    {label: 'Office Manager', value: 'Office Manager', disabled: false},
    {label: 'Support Lead', value: 'Support Lead', disabled: false},
    {label: 'Regional Director', value: 'Regional Director', disabled: false},
    {label: 'Senior Marketing Designer', value: 'Senior Marketing Designer', disabled: false},
    {label: 'Marketing Designer', value: 'Marketing Designer', disabled: false},
    {
      label: 'Chief Financial Officer (CFO)',
      value: 'Chief Financial Officer (CFO)',
      disabled: false,
    },
    {label: 'Systems Administrator', value: 'Systems Administrator', disabled: false},
    {label: 'Accountant', value: 'Accountant', disabled: false},
    {label: 'Junior Technical Author', value: 'Junior Technical Author', disabled: false},
    {label: 'Senior Javascript Developer', value: 'Senior Javascript Developer', disabled: false},
    {label: 'Accountant', value: 'Accountant', disabled: false},
    {label: 'Integration Specialist', value: 'Integration Specialist', disabled: false},
  ];
  eventOnClick: any = '';
  subscription: Subscription;
  locations = ['London', 'Edinburgh'];
  constructor(
    private toastrService: ToastrService,
    private fb: FormBuilder,
    public modalRef: MdbModalRef<ModalComponent>,
    private sharedDataService: SharedDataService
  ) {}
  ngOnInit() {
    this.setModalForm();
    this.subscription = this.sharedDataService.currentOutput.subscribe(event => {
      this.eventOnClick = event;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitHandler = (): void => {
    this.toastrService.showError('Please fulfill all the fields');
  };

  closeModal = (): void => {
    this.modalRef.close();
  };

  save = (): void => {
    // this.closeModal();
    this.submitHandler();
  };

  setModalForm() {
    this.addTableRowForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      position: new FormControl(''),
      location: new FormControl(''),
    });
  }

  /**
   * share output from modal to other component
   * @param event
   */
  onButtonClick(event: any) {
    this.sharedDataService.getEventType(event);
  }
}
