import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOrderStartComponent } from './pizza-order-start.component';

describe('PizzaOrderStartComponent', () => {
  let component: PizzaOrderStartComponent;
  let fixture: ComponentFixture<PizzaOrderStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaOrderStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrderStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
