import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/home/project';
import { GithubService } from './github.service';
import { GithubRepo } from './githubRepo';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { ProjectsService } from 'src/app/home/projects.service';
@Component({
  selector: 'app-github-new',
  templateUrl: './github-new.component.html',
  styleUrls: ['./github-new.component.css']
})
export class GithubNewComponent implements OnInit {

  constructor(private readonly githubService: GithubService, private readonly adminService: AdminService, private router: Router, private readonly projectsService: ProjectsService) { }

  ngOnInit(): void {
    if (!this.adminService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  Projects: Project[] = [];
  Repos: GithubRepo[] = [];
  success = "";
  error = "";

  onSearch(username: string) {
    this.githubService.getProjects(username).subscribe(
      (data: GithubRepo[]) => {
        if (!data) {
          this.error = "No projects found. Maybe you put the wrong username?";
        } else {
          this.Repos = data;
        }
      }
    );
  }

  logout() {
    this.adminService.logout();
  }

  onAdd(repo: GithubRepo) {
    let Project: Project = {} as Project;
    Project.title = repo.name;
    if (repo.description) Project.short_desc = repo.description;
    else Project.short_desc = repo.name;
    Project.github_link = repo.html_url;
    Project.image = repo.owner.avatar_url;
    if (repo.description) Project.description = repo.description;
    else Project.description = "";
    Project.groups = repo.language + ",github";

    this.projectsService.createProject(Project).subscribe(
      () => {
        this.router.navigate(['/admin/dashboard/projects']);
      }
    );
  }
}
