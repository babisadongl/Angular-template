import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleExtendedViewComponent } from './sample-extended-view.component';

describe('SampleExtendedViewComponent', () => {
  let component: SampleExtendedViewComponent;
  let fixture: ComponentFixture<SampleExtendedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleExtendedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleExtendedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
