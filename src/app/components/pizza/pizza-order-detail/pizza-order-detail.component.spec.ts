import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOrderDetailComponent } from './pizza-order-detail.component';

describe('PizzaOrderDetailComponent', () => {
  let component: PizzaOrderDetailComponent;
  let fixture: ComponentFixture<PizzaOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
