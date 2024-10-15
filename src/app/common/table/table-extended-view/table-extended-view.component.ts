import {Component, Input, OnInit} from '@angular/core';
import {ExtendedView} from 'src/app/constants/extended-view.constant';

@Component({
  selector: 'app-table-extended-view',
  templateUrl: './table-extended-view.component.html',
  styleUrls: ['./table-extended-view.component.scss'],
})
export class TableExtendedViewComponent implements OnInit {
  @Input() record: any;
  @Input() extendedView: string = '';
  extendedViews = ExtendedView;

  constructor() {}

  ngOnInit(): void {}
}
