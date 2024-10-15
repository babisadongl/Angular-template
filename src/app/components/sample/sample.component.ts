import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {ModalComponent} from 'src/app/common';
import {BaseActions, ExtendedView, ModalBodyContent} from 'src/app/constants';
import {PipeFormat, Searchable, TableConfig} from 'src/app/interfaces';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent>;
  extendedView = ExtendedView.SAMPLE;
  openModal: boolean = false;
  tableConfig: TableConfig = {
    objectData: [
      {
        headerKey: '',
        dataKey: '',
        isCollapsible: true,
      },
      {headerKey: 'Name', dataKey: 'name'},
      {headerKey: 'Position', dataKey: 'position'},
      {headerKey: 'Office', dataKey: 'office'},
      {
        headerKey: 'Start Date',
        dataKey: 'startDate',
        type: {
          format: PipeFormat.DATE,
          dateFormat: 'M/d/yyyy',
        },
      },
      {
        headerKey: 'Salary',
        dataKey: 'salary',
        type: {
          format: PipeFormat.CURRENCY,
          currencyCode: '$',
          currencyDisplay: 'code',
        },
      },
    ],
    tableClass: 'table datatable-table mt-4',
    headerClass: 'text-transform',
    baseActions: [BaseActions.REFRESH, BaseActions.ADD, BaseActions.EXPORT],
    dataType: '',
    isSearchable: true,
  };

  dataSource: Array<any> = [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 61,
      startDate: '2011/04/25',
      salary: 32080,
      collapsed: false,
      masterDetail: [{orderId: 1, orderDate: '24-07-1996', adress: '35 King George'}],
    },
    {
      name: 'Sonya Frost',
      position: 'Software Engineer',
      office: 'Edinburgh',
      age: 23,
      startDate: '2008/12/13',
      salary: 10360,
      collapsed: true,
      masterDetail: [{orderId: 2, orderDate: '24-07-1996', adress: '35 King George'}],
    },
    {
      name: 'Jena Gaines',
      position: 'Office Manager',
      office: 'London',
      age: 30,
      startDate: '2008/12/19',
      salary: 90560,
      collapsed: false,
    },
    {
      name: 'Quinn Flynn',
      position: 'Support Lead',
      office: 'Edinburgh',
      age: 22,
      startDate: '2013/03/03',
      salary: 34200,
      collapsed: true,
    },
    {
      name: 'Charde Marshall',
      position: 'Regional Director',
      office: 'San Francisco',
      age: 36,
      startDate: '2008/10/16',
      salary: 47060,
      collapsed: true,
    },
    {
      name: 'Haley Kennedy',
      position: 'Senior Marketing Designer',
      office: 'London',
      age: 43,
      startDate: '2012/12/18',
      salary: 31350,
      collapsed: true,
    },
    {
      name: 'Tatyana Fitzpatrick',
      position: 'Regional Director',
      office: 'London',
      age: 19,
      startDate: '2010/03/17',
      salary: 38575,
      collapsed: true,
    },
    {
      name: 'Michael Silva',
      position: 'Marketing Designer',
      office: 'London',
      age: 66,
      startDate: '2012/11/27',
      salary: 19850,
      collapsed: true,
    },
    {
      name: 'Paul Byrd',
      position: 'Chief Financial Officer (CFO)',
      office: 'New York',
      age: 64,
      startDate: '2010/06/09',
      salary: 72500,
      collapsed: true,
    },
    {
      name: 'Gloria Little',
      position: 'Systems Administrator',
      office: 'New York',
      age: 59,
      startDate: '2009/04/10',
      salary: 23750,
      collapsed: true,
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: 63,
      startDate: '2011/07/25',
      salary: 17075,
      collapsed: true,
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: 66,
      startDate: '2009/01/12',
      salary: 86000,
      collapsed: true,
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: 22,
      startDate: '2012/03/29',
      salary: 43306,
      collapsed: true,
    },
    {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: 33,
      startDate: '2008/11/28',
      salary: 16270,
      collapsed: true,
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      age: 61,
      startDate: '2012/12/02',
      salary: 37200,
      collapsed: true,
    },
  ];

  actions: Array<any> = [
    {
      type: 'View',
      label: 'View',
      icon: 'eye',
      class: '',
    },
    {
      type: 'Edit',
      label: 'Edit',
      icon: 'pencil-square',
      class: '',
    },
    {
      type: 'Delete',
      label: 'Delete',
      icon: 'trash',
      class: '',
    },
  ];

  searchable: Searchable = {
    inputType: 'text',
    inputClass: 'w-75 form-control me-3 d-inline',
    id: 'search-input',
    labelClass: 'form-label',
  };

  constructor(private modalService: MdbModalService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  add(): void {
    this.openModal = true;
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-lg',
      data: {
        data: this.dataSource,
        modalHeader: 'Add table row',
        bodyContentConstants: ModalBodyContent.STEPPER,
        baseActions: [BaseActions.PREVIOUS, BaseActions.NEXT],
      },
    });
  }
  export(): void {
    console.log('export action', this.dataSource);
  }
  refresh(): void {
    console.log('refresh action', this.dataSource);
  }
  onBaseAction(type: string): void {
    switch (type) {
      case BaseActions.ADD.type:
        this.add();
        break;
      case BaseActions.EXPORT.type:
        this.export();
        break;
      case BaseActions.REFRESH.type:
        this.refresh();
    }
  }
  onSearchChange(event: any): void {
    console.log('search change', event);
  }
  onPaginationChange(event: any): void {
    console.log('pagination change', event);
  }
  onSortChange(event: any): void {
    console.log('sort change', event);
  }

  handleCloseModal() {
    this.modalRef.close();
  }
}
