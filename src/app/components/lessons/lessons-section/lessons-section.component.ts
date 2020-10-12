import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Lesson } from 'src/app/interfaces/lesson';

@Component({
  selector: 'app-lessons-section',
  templateUrl: './lessons-section.component.html',
  styleUrls: ['./lessons-section.component.scss']
})
export class LessonsSectionComponent implements OnInit {
  lessons: Lesson[] = [
    {
      id: 0,
      name: "Lesson 1 - Introduction to photography",
      imageUrl: "../assets/img/lesson1.jpg"
    },
    {
      id: 1,
      name: "Lesson 2 - Choose your camera",
      imageUrl: "../assets/img/lesson2.jpg"
    },
    {
      id: 2,
      name: "Lesson 3 - capturing the view",
      imageUrl: "../assets/img/lesson3.jpg"
    },
    {
      id: 3,
      name: "Lesson 4 - Do it like a pro",
      imageUrl: "../assets/img/lesson4.jpg"
    },
    {
      id: 4,
      name: "Lesson 5 - Conclusion",
      imageUrl: "../assets/img/lesson5.jpg"
    }
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() { }
}
