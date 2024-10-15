import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss'],
})
export class ActionListComponent implements OnInit {
  @Input() actions: Array<any> = [];
  @Input() dataSource: Array<any> = [];
  @Output() emitActionEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  // Emmits action event for events like add, edit, delete
  handleClick(type: any) {
    this.emitActionEvent.emit(type);
  }
}
