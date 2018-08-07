import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './content/navbar/navbar.component';
import { TocComponent } from './content/toc/toc.component';
import { GlossaryComponent } from './content/glossary/glossary.component';
import { AudioComponent } from './content/audio/audio.component';
import { BasicFrameComponent } from './content/frames/basic-frame/basic-frame.component';
import { WebglFrameComponent } from './content/frames/webgl-frame/webgl-frame.component';
import { ColFrameComponent } from './content/frames/col-frame/col-frame.component';
import { ExamFrameComponent } from './content/frames/exam-frame/exam-frame.component';
import { PretestFrameComponent } from './content/frames/pretest-frame/pretest-frame.component';
import { PosttestFrameComponent } from './content/frames/posttest-frame/posttest-frame.component';
import { CourseDashboardComponent } from './admin/course-dashboard/course-dashboard.component';
import { FrameListComponent } from './admin/frame-list/frame-list.component';
import { FrameEditComponent } from './admin/frame-edit/frame-edit.component';
import { FrameCreateComponent } from './admin/frame-create/frame-create.component';
import { FrameComponent } from './content/frames/frame.component';
import { IntroFrameComponent } from './content/frames/intro-frame/intro-frame.component';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TocComponent,
    GlossaryComponent,
    AudioComponent,
    BasicFrameComponent,
    WebglFrameComponent,
    ColFrameComponent,
    ExamFrameComponent,
    PretestFrameComponent,
    PosttestFrameComponent,
    CourseDashboardComponent,
    FrameListComponent,
    FrameEditComponent,
    FrameCreateComponent,
    FrameComponent,
    IntroFrameComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
