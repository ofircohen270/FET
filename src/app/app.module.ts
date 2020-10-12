import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LessonCardComponent } from './components/lessons/lesson-card/lesson-card.component';
import { BadgesSectionComponent } from './components/badges/badges-section/badges-section.component';
import { LessonsSectionComponent } from './components/lessons/lessons-section/lessons-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonCardComponent,
    VideoPlayerComponent,
    HeroSectionComponent,
    BadgesSectionComponent,
    LessonsSectionComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    YouTubePlayerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
