import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LessonsSectionComponent } from './components/lessons/lessons-section/lessons-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    LessonsSectionComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
