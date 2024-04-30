import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenaNuevaFormComponent } from './cadena-nueva-form.component';

describe('CadenaNuevaFormComponent', () => {
  let component: CadenaNuevaFormComponent;
  let fixture: ComponentFixture<CadenaNuevaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadenaNuevaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadenaNuevaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
