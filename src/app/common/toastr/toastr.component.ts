import {Component, OnInit} from '@angular/core';
import {MdbNotificationRef} from 'mdb-angular-ui-kit/notification';

@Component({
  selector: 'app-toast',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
})
export class ToastrComponent implements OnInit {
  severity: string;
  summary: string;
  detail: string;
  notificationRef: MdbNotificationRef<ToastrComponent>;

  constructor() {}

  ngOnInit(): void {}
}
