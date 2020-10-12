import { Component, Input, OnInit } from '@angular/core';

import { Lesson } from 'src/app/interfaces/lesson';
import { LessonsService } from 'src/app/services/lessons.service';
import { VideoPlayerData } from '../../video-player/video-player.component';

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

  setSecondsWatched(videoData: VideoPlayerData) {
    this.lessonsService.setLessonVideoData(this.lesson.id, videoData)
  }

}
