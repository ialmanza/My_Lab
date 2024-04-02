import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCadenasComponent } from './list-cadenas.component';

describe('ListCadenasComponent', () => {
  let component: ListCadenasComponent;
  let fixture: ComponentFixture<ListCadenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCadenasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCadenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
