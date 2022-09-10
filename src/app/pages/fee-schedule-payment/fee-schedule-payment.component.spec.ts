import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSchedulePaymentComponent } from './fee-schedule-payment.component';

describe('FeeSchedulePaymentComponent', () => {
  let component: FeeSchedulePaymentComponent;
  let fixture: ComponentFixture<FeeSchedulePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeSchedulePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSchedulePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
