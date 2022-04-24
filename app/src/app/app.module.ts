import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProjectFilterPipe } from './home/project-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor, DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardHomeComponent } from './admin/dashboard/dashboard-home/dashboard-home.component';
import { ProjectsComponent } from './admin/dashboard/projects/projects.component';
import { NewComponent } from './admin/dashboard/projects/new/new.component';
import { ProjectHomeComponent } from './admin/dashboard/projects/project-home/project-home.component';
import { EditComponent } from './admin/dashboard/projects/edit/edit.component';
import { GithubNewComponent } from './admin/dashboard/projects/github-new/github-new.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { CommentsHomeComponent } from './admin/dashboard/comments/comments-home/comments-home.component';
import { UserComponent } from './admin/dashboard/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    ProjectFilterPipe,
    DashboardHomeComponent,
    ProjectsComponent,
    NewComponent,
    ProjectHomeComponent,
    EditComponent,
    GithubNewComponent,
    ProjectViewComponent,
    CommentsComponent,
    CommentsHomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})

export class AppModule { }
