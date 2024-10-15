import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBodyContentComponent } from './modal-body-content.component';

describe('ModalBodyContentComponent', () => {
  let component: ModalBodyContentComponent;
  let fixture: ComponentFixture<ModalBodyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBodyContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBodyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
