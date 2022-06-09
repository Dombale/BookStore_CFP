import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessfullyComponent } from './order-successfully.component';

describe('OrderSuccessfullyComponent', () => {
  let component: OrderSuccessfullyComponent;
  let fixture: ComponentFixture<OrderSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
