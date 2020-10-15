import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { LessonsService } from 'src/app/services/lessons.service';
import { VideoPlayerData } from '../../video-player/video-player.component';

@Component({
  selector: 'app-badges-section',
  templateUrl: './badges-section.component.html',
  styleUrls: ['./badges-section.component.scss']
})
export class BadgesSectionComponent implements OnInit {
  @ViewChild('badgesSection') sectionElement: ElementRef;

  sticky: boolean = false
  sectionPosition: number;

  lessonsVideoData: { [lessonId: number]: VideoPlayerData };

  constructor(private lessonsService: LessonsService) {
  }

  ngOnInit(): void {
    this.lessonsVideoData = this.lessonsService.getLessonsVideoData()
  }

  ngAfterViewInit() {
    this.sectionPosition = this.sectionElement.nativeElement.offsetTop
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= window.innerHeight * 0.85) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  /**
   * Calculates the percentage of the lesson progress according to the number of seconds of the video
   * that were watched. The data is taken from the lessons service which keeps a track of the watched seconds.
   * @param lessonVideoData 
   */
  getPercentage(lessonVideoData: VideoPlayerData) {
    const numberOfSecondsWatched = Object.keys(lessonVideoData.secondsWatched).length
    const percentageWatched = (numberOfSecondsWatched / lessonVideoData.videoDuration) * 100

    // The icon gets filled from the percentage of 30 - 76, so I am changing the percentage accordingly
    return 30 + (percentageWatched * (54 / 100))
  }
}
