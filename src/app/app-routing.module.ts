import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDashboardComponent } from './admin/course-dashboard/course-dashboard.component';
import { FrameListComponent } from './admin/frame-list/frame-list.component';
import { FrameEditComponent } from './admin/frame-edit/frame-edit.component';
import { FrameCreateComponent } from './admin/frame-create/frame-create.component';
import { FrameComponent } from './content/frames/frame.component';
import { IntroFrameComponent } from './content/frames/intro-frame/intro-frame.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroFrameComponent },
  { path: 'course-dashboard', component: CourseDashboardComponent },
  { path: 'frame-list', component: FrameListComponent },
  { path: 'frame-edit', component: FrameEditComponent },
  { path: 'frame-create', component: FrameCreateComponent },
  { path: 'frames/:id', component: FrameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
