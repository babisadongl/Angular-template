import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MdbPaginationChange, MdbTableDirective} from 'mdb-angular-ui-kit/table';
import {ObjectData, Searchable, TableConfig} from 'src/app/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableConfig: TableConfig;
  @Input() dataSource: Array<any> = [];
  @Input() actions: Array<any> = [];
  @Input() extendedView: string = '';
  @Input() searchable: Searchable;

  // searches from ObjectData's properties
  @ViewChild('tableSearch') searchTable: MdbTableDirective<ObjectData>;

  @Output() sortChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() paginationChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() baseAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  toggleCollapse(data: any): void {
    data.collapsed = !data.collapsed;
  }

  onSortChange(event: any): void {
    this.sortChange.emit(event);
  }

  onPaginationChange(event: MdbPaginationChange): void {
    this.paginationChange.emit(event);
  }

  search(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.searchTable.search(searchTerm);
    this.searchChange.emit(searchTerm);
  }

  onBaseAction(type: string): void {
    this.baseAction.emit(type);
  }

  receiveActionEvent($event: any) {
    console.log('Action event: ', $event);
    switch ($event.toLowerCase()) {
      case 'view':
        console.log('View');
        // perform view action in modal.
        break;
      case 'edit':
        console.log('Edit');
        // perform edit action either in modal or indline.
        break;
      case 'delete':
        console.log('Delete');
        // perform delete action.
        break;
      default:
        break;
    }
  }
}
