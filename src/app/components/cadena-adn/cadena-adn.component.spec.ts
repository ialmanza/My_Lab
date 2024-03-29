import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenaADNComponent } from './cadena-adn.component';

describe('CadenaADNComponent', () => {
  let component: CadenaADNComponent;
  let fixture: ComponentFixture<CadenaADNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadenaADNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadenaADNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
