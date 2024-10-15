import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ModalBodyContent} from 'src/app/constants';

@Component({
  selector: 'app-modal-body-content',
  templateUrl: './modal-body-content.component.html',
  styleUrls: ['./modal-body-content.component.scss'],
})
export class ModalBodyContentComponent implements OnInit {
  @Input() bodyContentConstants: string = '';
  @Input() modalForm: FormGroup;

  bodyConstant = ModalBodyContent;

  constructor() {}

  ngOnInit(): void {}
}
