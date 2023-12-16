import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/home/projects.service';
import { Project } from 'src/app/home/project';
import { CommentsService } from 'src/app/project-view/comments.service';
import { Comments } from 'src/app/project-view/comments';
import { UntypedFormBuilder } from '@angular/forms';
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService,
              private route: ActivatedRoute,
              private readonly commentsService: CommentsService,
              private readonly formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getProject(this.id);
    this.getComments();
  }

  project: any;
  id: number= 0;
  comments: Comments[] = [];
  form = this.formBuilder.group({
    username: '',
    comment: '',
  });
  error: string = '';
  success: string = '';

  getProject(id: number) {
    this.projectsService.getProject(id).subscribe(
      (data: Project) => {
        this.project = data;
      }
    );
  }

  onComment (){
    if (!this.form.value.username || !this.form.value.comment) {
      this.error = 'Missing fields';
      return ;
    }
    if (this.form.value.username.length > 20 || this.form.value.username < 5)
    {
      this.error = 'Username must be between 5 and 20 characters';
      return ;
    }

    var newComment: Comments = {
      username: this.form.value.username,
      comment: this.form.value.comment,
      date: new Date(),
      project_id: this.id,
    };

    this.commentsService.createComment(newComment).subscribe();
    this.error = '';
    this.success = 'Comment created';
    this.getComments();
  }

  getComments() {
    this.commentsService.getCommentsByProject(this.id).subscribe(
      (data: Comments[]) => {
        this.comments = data;
      }
    );
  }

}
