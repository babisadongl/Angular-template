import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExtendedViewComponent } from './table-extended-view.component';

describe('TableExtendedViewComponent', () => {
  let component: TableExtendedViewComponent;
  let fixture: ComponentFixture<TableExtendedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableExtendedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExtendedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
