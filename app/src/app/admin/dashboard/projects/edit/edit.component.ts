import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/home/project';
import { ProjectsService } from 'src/app/home/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService,
              private formBuilder: FormBuilder, private router: Router,
              private readonly adminService: AdminService,
              private route: ActivatedRoute) { }

  message = '';
  id: number= 0;
  editForm = this.formBuilder.group({
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
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.projectsService.getProject(this.id).subscribe(
      data => {
        this.editForm.setValue({
          title: data.title,
          short_desc: data.short_desc,
          groups: data.groups,
          image: data.image,
          github: data.github_link,
          desc: data.description,
        });
      }
    );
  }

  onSubmit() {
    if (!this.editForm.value.title || !this.editForm.value.short_desc || !this.editForm.value.desc || !this.editForm.value.groups) {
      this.message = 'Missing fields';
      return ;
    }

    var editedProject: Project = {
      id: this.id,
      title: this.editForm.value.title,
      short_desc: this.editForm.value.short_desc,
      groups: this.editForm.value.groups,
      image: this.editForm.value.image,
      github_link: this.editForm.value.github,
      description: this.editForm.value.desc,
    };

    this.projectsService.updateProject(editedProject).subscribe(
      (data: string) => {
        this.message = data;
        this.router.navigate(['/admin/dashboard/projects']);
      }
    );
  }

}
