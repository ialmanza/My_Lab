import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPcrsComponent } from './list-pcrs.component';

describe('ListPcrsComponent', () => {
  let component: ListPcrsComponent;
  let fixture: ComponentFixture<ListPcrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPcrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPcrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
