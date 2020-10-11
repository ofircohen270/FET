import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesSectionComponent } from './badges-section.component';

describe('BadgesSectionComponent', () => {
  let component: BadgesSectionComponent;
  let fixture: ComponentFixture<BadgesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
