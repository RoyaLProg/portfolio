import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProjectFilterPipe } from './home/project-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardHomeComponent } from './admin/dashboard/dashboard-home/dashboard-home.component';
import { ProjectsComponent } from './admin/dashboard/projects/projects.component';
import { NewComponent } from './admin/dashboard/projects/new/new.component';
import { ProjectHomeComponent } from './admin/dashboard/projects/project-home/project-home.component';

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
    ProjectHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
