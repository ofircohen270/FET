import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/interfaces/lesson';

@Component({
  selector: 'app-badges-section',
  templateUrl: './badges-section.component.html',
  styleUrls: ['./badges-section.component.scss']
})
export class BadgesSectionComponent implements OnInit {

  @Input() lessons: Lesson[] = []

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * The icon gets filled from the percentage of 30 - 76, so I am changing the percentage accordingly
   * @param percentageWatched 
   */
  getPercentage(percentageWatched: number) {
    return 30 + (percentageWatched * (54 / 100))
  }
}
