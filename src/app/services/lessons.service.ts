import { Injectable } from '@angular/core';
import { VideoPlayerData } from '../components/video-player/video-player.component';

const LocalStorageItemName = 'lessonsVideoData'

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  // I am keeping a record of the lessons and their video data in the local storage
  lessonsVideoData: { [lessonId: number]: VideoPlayerData }; 

  /**
   * Takes the data from the local storage to initial the service
   */
  constructor() {
    this.lessonsVideoData = JSON.parse(localStorage.getItem(LocalStorageItemName)) || {};
  }

  /**
   * Sets the new data in the local storage
   * @param lessonId 
   * @param newLessonData 
   */
  setLessonVideoData(lessonId: number, newLessonData: VideoPlayerData) {
    const prevLessonData = this.lessonsVideoData[lessonId]

    if (prevLessonData) {
      this.lessonsVideoData[lessonId] = {
        videoDuration: prevLessonData.videoDuration,
        // I don't overide the seconds, I add to the existing record
        secondsWatched: Object.assign(prevLessonData.secondsWatched, newLessonData.secondsWatched)
      }
    }
    else (this.lessonsVideoData)[lessonId] = newLessonData

    localStorage.setItem(LocalStorageItemName, JSON.stringify(this.lessonsVideoData))
  }

  getLessonsVideoData() {
    return this.lessonsVideoData
  }
}
