import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project';
import { Skill } from './skill';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private projectsService: ProjectsService, private skillService: SkillService) { }

  title = 'app';
  projects: Project[] = this.getProjects();
  groups : string[] = this.getGroups();
  selectedOption: string = this.groups[0];
  skills: Skill[] = this.getSkills();

  getProjects(): Project[] {
    this.projectsService.getProjects().subscribe(data => {
      console.log(data);
      this.projects = data;
    });
    return this.projects;
  }

  getGroups(): string[] {
    var arr: string[] = [];
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data;
      this.projects.forEach(project => {
        project.groups.split(',').forEach(group => {
          if (arr.indexOf(group) == -1) {
            arr.push(group);
          }
        });
      });
  });
    console.log(arr);
    return arr;
  }

  getSkills(): Skill[] {
    this.skillService.getSkills().subscribe(data => {
      this.skills = data;
    });
    return this.skills;
  }
}
