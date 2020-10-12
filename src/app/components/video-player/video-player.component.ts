import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface VideoPlayerData {
  secondsWatched: { [second: number]: boolean }, // A track of which seconds were watched
  videoDuration: number
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoId: string;
  @Output() onDataChange = new EventEmitter<VideoPlayerData>();

  // Video Player Data
  videoDuration: number;
  secondsWatched: { [second: number]: boolean } = {};
  numberOfSecondsWatched: number = 0;

  timer: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  stateChange(event: YT.OnStateChangeEvent) {
    if (event.data === YT.PlayerState.PLAYING) {

      if (!this.videoDuration) this.videoDuration = event.target.getDuration()
      this.timer = setInterval(this.record.bind(this, event.target), 500);

    } else clearInterval(this.timer)

  }

  /**
   * Adds the currently viewed second of the video to the record and emits the Video Player Data
   * if there's a change in the number of seconds watched
   * @param player 
   */
  record(player: YT.Player) {
    this.secondsWatched[Math.round(player.getCurrentTime())] = true;

    const numberOfSecondsWatched = Object.keys(this.secondsWatched).length

    if (numberOfSecondsWatched > this.numberOfSecondsWatched) {
      this.numberOfSecondsWatched = numberOfSecondsWatched
      this.onDataChange.emit({
        videoDuration: this.videoDuration,
        secondsWatched: this.secondsWatched
      })
    }
  }
}
