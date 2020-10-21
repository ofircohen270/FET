import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMorePopupComponent } from './learn-more-popup.component';

describe('LearnMorePopupComponent', () => {
  let component: LearnMorePopupComponent;
  let fixture: ComponentFixture<LearnMorePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMorePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMorePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
