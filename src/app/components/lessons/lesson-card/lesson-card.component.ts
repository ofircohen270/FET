import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/interfaces/lesson';
import { LessonsService } from 'src/app/services/lessons.service';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss']
})
export class LessonCardComponent implements OnInit {
  @Input() lesson: Lesson;
  rotated: boolean = false;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
  }

  toggleCardRotated() {
    this.rotated = !this.rotated
  }

  setPercentageWatched(percentageWatched: number) {
    this.lessonsService.setWatchedLesson(this.lesson.id, percentageWatched)
  }

}
