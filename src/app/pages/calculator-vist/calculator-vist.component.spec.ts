import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorVistComponent } from './calculator-vist.component';

describe('CalculatorVistComponent', () => {
  let component: CalculatorVistComponent;
  let fixture: ComponentFixture<CalculatorVistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorVistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorVistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
