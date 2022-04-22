import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectsService } from 'src/app/home/projects.service';
import { Project } from 'src/app/home/project';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService, private formBuilder: FormBuilder, private router: Router, private readonly adminService: AdminService) { }

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

    var newProject: Project = {
      title: this.newForm.value.title,
      short_desc: this.newForm.value.short_desc,
      groups: this.newForm.value.groups,
      image: this.newForm.value.image,
      github_link: this.newForm.value.github,
      description: this.newForm.value.desc,
    };

    this.projectsService.createProject(newProject).subscribe(
      (project) => {
        console.log(project);
        this.router.navigate(['/admin/dashboard/projects']);
      }
    );
    this.message = 'Project created';
    this.router.navigate(['/admin/dashboard/projects']);
  }
}
