// Modules
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LessonCardComponent } from './components/lessons/lesson-card/lesson-card.component';
import { BadgesSectionComponent } from './components/badges/badges-section/badges-section.component';
import { LessonsSectionComponent } from './components/lessons/lessons-section/lessons-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonCardComponent,
    VideoPlayerComponent,
    HeroSectionComponent,
    BadgesSectionComponent,
    LessonsSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    FormsModule,
    LayoutModule,
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
