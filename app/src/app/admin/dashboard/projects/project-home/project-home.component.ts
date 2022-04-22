import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/home/project';
import { ProjectsService } from 'src/app/home/projects.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService, private router: Router, private readonly adminService: AdminService) { }

  projects: Project[] = [];
  ngOnInit(): void {
    if (!this.adminService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  delete(id: number | undefined): void {
    console.log(id);
    if (id && confirm('Are you sure you want to delete this project?')) {
      if (this.adminService.isLoggedIn()) {
        this.projectsService.deleteProject(id).subscribe(() => this.getProjects());
      }
    }
  }
}
