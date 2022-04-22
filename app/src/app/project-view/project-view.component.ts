import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/home/projects.service';
import { Project } from 'src/app/home/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getProject(this.id);
  }

  project: any;
  id: number= 0;

  getProject(id: number) {
    this.projectsService.getProject(id).subscribe(
      (data: Project) => {
        this.project = data;
      }
    );
  }
}
