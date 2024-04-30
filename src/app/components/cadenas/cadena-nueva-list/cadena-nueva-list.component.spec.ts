import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenaNuevaListComponent } from './cadena-nueva-list.component';

describe('CadenaNuevaListComponent', () => {
  let component: CadenaNuevaListComponent;
  let fixture: ComponentFixture<CadenaNuevaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadenaNuevaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadenaNuevaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
