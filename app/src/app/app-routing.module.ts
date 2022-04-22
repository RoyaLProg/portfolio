import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardHomeComponent } from './admin/dashboard/dashboard-home/dashboard-home.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './admin/dashboard/projects/projects.component';
import { NewComponent } from './admin/dashboard/projects/new/new.component';
import { ProjectHomeComponent } from './admin/dashboard/projects/project-home/project-home.component';
import { EditComponent } from './admin/dashboard/projects/edit/edit.component';
import { GithubNewComponent } from './admin/dashboard/projects/github-new/github-new.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
  { path: 'admin/dashboard', component: DashboardComponent,
    children: [
      {path: '', component: DashboardHomeComponent},
      {path: 'projects', component: ProjectsComponent,
        children: [
          {path: '', component: ProjectHomeComponent},
          {path: 'new', component: NewComponent},
          {path: 'new-github', component: GithubNewComponent},
          {path: ':id', component: EditComponent},
        ]
      }
  ] },
  {path: ':id', component: ProjectViewComponent},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
