import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPositionExampleComponent } from './sidenav-position-example.component';

describe('SidenavPositionExampleComponent', () => {
  let component: SidenavPositionExampleComponent;
  let fixture: ComponentFixture<SidenavPositionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavPositionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavPositionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
