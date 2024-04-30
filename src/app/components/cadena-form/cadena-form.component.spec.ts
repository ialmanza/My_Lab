import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenaFormComponent } from './cadena-form.component';

describe('CadenaFormComponent', () => {
  let component: CadenaFormComponent;
  let fixture: ComponentFixture<CadenaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadenaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadenaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
