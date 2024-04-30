import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenaNuevaComponent } from './cadena-nueva.component';

describe('CadenaNuevaComponent', () => {
  let component: CadenaNuevaComponent;
  let fixture: ComponentFixture<CadenaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadenaNuevaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadenaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
