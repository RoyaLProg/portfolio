import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ProjectsService } from 'src/app/home/projects.service';
import { Project } from 'src/app/home/project';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService, private formBuilder: UntypedFormBuilder, private router: Router, private readonly adminService: AdminService) { }

  message = '';
  newForm = this.formBuilder.group({
    title: '',
    short_desc: '',
    groups: '',
    image: '',
    github: '',
    desc: '',
  });

  ngOnInit(): void {
    if (!this.adminService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  onSubmit() {
    if (!this.newForm.value.title || !this.newForm.value.short_desc || !this.newForm.value.desc || !this.newForm.value.groups) {
      this.message = 'Missing fields';
      return ;
    }

    let Project: Project = {} as Project;
    Project.title = this.newForm.value.title;
    Project.short_desc = this.newForm.value.short_desc;
    if (this.newForm.value.github !== '') Project.github_link = this.newForm.value.github;
    else Project.github_link = '#';
    if (this.newForm.value.image !== '') Project.image = this.newForm.value.image;
    else Project.image = "https://choualbox.com/Img/1611426483399.jpg";
    Project.description = this.newForm.value.desc;
    Project.groups = this.newForm.value.groups;

    this.projectsService.createProject(Project).subscribe(
      () => {
        this.router.navigate(['/admin/dashboard/projects']);
      }
    );
  }
}
