import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsSectionComponent } from './lessons-section.component';

describe('LessonsSectionComponent', () => {
  let component: LessonsSectionComponent;
  let fixture: ComponentFixture<LessonsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
