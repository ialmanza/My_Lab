import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrFormComponent } from './pcr-form.component';

describe('PcrFormComponent', () => {
  let component: PcrFormComponent;
  let fixture: ComponentFixture<PcrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcrFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
