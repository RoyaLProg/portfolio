import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private readonly http: HttpClient) { }
  baseURL = 'http://localhost:3000/comments';

  getCommentsByProject(projectId :number): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.baseURL}/project/${projectId}`);
  }
  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.baseURL);
  }

  createComment(comment: Comments): Observable<string> {
    return this.http.post<string>(this.baseURL, comment);
  }

  deleteComment(id: number): Observable<string> {
    return this.http.post<string>(`${this.baseURL}/${id}/delete`, {});
  }
}
