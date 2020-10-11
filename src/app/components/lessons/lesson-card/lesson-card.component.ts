import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/interfaces/lesson';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss']
})
export class LessonCardComponent implements OnInit {
  @Input() lesson: Lesson;
  rotated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCardRotated() {
    this.rotated = !this.rotated
  }

}
