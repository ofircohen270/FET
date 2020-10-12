import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  watchedLessonsPrecentage: { [lessonId: number]: number };

  constructor() {
    this.watchedLessonsPrecentage = JSON.parse(localStorage.getItem('watchedLessonsPrecentage')) || {};
  }

  setWatchedLesson(lessonId: number, percentageWatched: number) {
    this.watchedLessonsPrecentage[String(lessonId)] = percentageWatched
    localStorage.setItem('watchedLessonsPrecentage', JSON.stringify(this.watchedLessonsPrecentage))
  }

  getWatchedLessonsPrecentage() {
    return this.watchedLessonsPrecentage
  }
}
