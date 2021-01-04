import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollStaffwellbeingLogoComponent } from './scroll-staffwellbeing-logo.component';

describe('ScrollStaffwellbeingLogoComponent', () => {
  let component: ScrollStaffwellbeingLogoComponent;
  let fixture: ComponentFixture<ScrollStaffwellbeingLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollStaffwellbeingLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollStaffwellbeingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
