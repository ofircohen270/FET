import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoId: string;
  @Output() onPercentageWatchedChange = new EventEmitter<number>();

  secondsWatchedRecord = [];
  timer;
  percentageWatched: number; // How much percentage of the video was watched

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  stateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) { // Started playing

      if (!this.secondsWatchedRecord.length) {
        // Creates a list with length of the number of seconds of the video
        this.secondsWatchedRecord = new Array(parseInt(event.target.getDuration()));
      }
      this.timer = setInterval(this.record.bind(this, event.target), 100);

    } else clearInterval(this.timer)

  }

  record(player) {
    this.secondsWatchedRecord[parseInt(player.getCurrentTime())] = true;
    this.calcPercentage();
  }

  calcPercentage() {
    const numberOfSecondsWatched = this.secondsWatchedRecord.filter(Boolean).length

    const percentageWatched = Math.round(
      numberOfSecondsWatched /
      this.secondsWatchedRecord.length * 100);

    if (this.percentageWatched !== percentageWatched) {
      this.percentageWatched = percentageWatched
      this.onPercentageWatchedChange.emit(this.percentageWatched)
    }
  }
}
