import {Component, OnInit} from '@angular/core';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';

import {ModalComponent} from 'src/app/common';
import {BaseActions, ModalBodyContent} from 'src/app/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent>;
  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {}

  // line chart
  // datasets = [
  //   {
  //     label: 'Traffic',
  //     data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
  //   },
  // ];

  // labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // barchart
  // datasetsbar = [
  //   {
  //     label: 'Traffic',
  //     data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
  //   },
  // ];

  // labelsbar = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  /**
   * to open modal
   */

  selectFilter() {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-md',
      ignoreBackdropClick: true,
      data: {
        modalHeader: 'Apply Filter',
        bodyContentConstants: ModalBodyContent.FORM,
        baseActions: [BaseActions.SUBMIT, BaseActions.RESET],
      },
    });
  }
}
