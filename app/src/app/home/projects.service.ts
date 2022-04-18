import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + '/projects' ,this.httpOptions);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + '/projects/' + id, this.httpOptions);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl + '/projects', project, this.httpOptions);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.baseUrl + '/projects/' + project.id, project, this.httpOptions);
  }
}
