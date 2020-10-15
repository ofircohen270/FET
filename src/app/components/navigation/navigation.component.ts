import { Component, OnInit } from '@angular/core';

interface NavigationLink {
  name: string;
  link: string
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  open: boolean = false;

  navigationLinks: NavigationLink[] = [
    {
      name: 'lessons',
      link: 'lessons-section'
    },
    { 
      name: 'contact us',
      link: 'contact-section'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen() {
    this.open = !this.open
  }

}
