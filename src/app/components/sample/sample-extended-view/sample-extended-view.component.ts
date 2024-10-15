import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sample-extended-view',
  templateUrl: './sample-extended-view.component.html',
  styleUrls: ['./sample-extended-view.component.scss'],
})
export class SampleExtendedViewComponent implements OnInit {
  @Input() sample: any;

  constructor() {}

  ngOnInit(): void {}
}
