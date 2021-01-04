import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLogoAnimationComponent } from './scroll-logo-animation.component';

describe('ScrollLogoAnimationComponent', () => {
  let component: ScrollLogoAnimationComponent;
  let fixture: ComponentFixture<ScrollLogoAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollLogoAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollLogoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
