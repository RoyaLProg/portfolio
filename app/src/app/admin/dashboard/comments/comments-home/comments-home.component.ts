import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { CommentsService } from 'src/app/project-view/comments.service';
import { Comments } from 'src/app/project-view/comments';
@Component({
  selector: 'app-comments-home',
  templateUrl: './comments-home.component.html',
  styleUrls: ['./comments-home.component.css']
})
export class CommentsHomeComponent implements OnInit {

  constructor(private readonly adminService: AdminService, private readonly commentsService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();
  }

  comments: Comments[] = [];
  success: string = '';
  error: string = '';

  getComments() {
    this.commentsService.getComments().subscribe(
      (data: Comments[]) => {
        this.comments = data;
      },
      (error) => {
        this.error = error;
      }
    );
  }

  delete(id: any) {
    if (typeof(id) === 'number' && confirm('Are you sure you want to delete this comment?')) {
      this.commentsService.deleteComment(id).subscribe(() => {
        this.success = 'Comment deleted';
      });
    }
    else
    {
      this.error = "Somehow, the id wasn't a number, what are you trying uh ?!";
    }
  }
}
