import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from './comments';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private readonly http: HttpClient) { }
  baseURL = environment.baseURL;

  getCommentsByProject(projectId :number): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.baseURL}comments/project/${projectId}`);
  }
  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.baseURL + 'comments');
  }

  createComment(comment: Comments): Observable<string> {
    return this.http.post<string>(this.baseURL, comment);
  }

  deleteComment(id: number): Observable<string> {
    return this.http.post<string>(`${this.baseURL}comments/${id}/delete`, {});
  }
}
