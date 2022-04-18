import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/home/project';
import { ProjectsService } from 'src/app/home/projects.service';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService) { }

  projects: Project[] = [];
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
