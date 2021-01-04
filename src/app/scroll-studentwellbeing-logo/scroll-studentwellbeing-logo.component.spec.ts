import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollStudentwellbeingLogoComponent } from './scroll-studentwellbeing-logo.component';

describe('ScrollStudentwellbeingLogoComponent', () => {
  let component: ScrollStudentwellbeingLogoComponent;
  let fixture: ComponentFixture<ScrollStudentwellbeingLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollStudentwellbeingLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollStudentwellbeingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
