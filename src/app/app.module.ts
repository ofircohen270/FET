import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LessonCardComponent } from './components/lessons/lesson-card/lesson-card.component';
import { LessonsSectionComponent } from './components/lessons/lessons-section/lessons-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    LessonsSectionComponent,
    LessonCardComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
