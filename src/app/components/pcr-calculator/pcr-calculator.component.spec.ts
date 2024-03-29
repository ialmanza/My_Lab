import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrCalculatorComponent } from './pcr-calculator.component';

describe('PcrCalculatorComponent', () => {
  let component: PcrCalculatorComponent;
  let fixture: ComponentFixture<PcrCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcrCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcrCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
