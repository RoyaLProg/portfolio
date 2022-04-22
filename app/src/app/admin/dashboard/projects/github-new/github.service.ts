import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubRepo } from './githubRepo';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getProjects(username: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`https://api.github.com/users/${username}/repos`);
  }
}
