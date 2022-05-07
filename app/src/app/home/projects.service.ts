import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  private baseUrl = environment.baseURL;;
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + 'projects' ,this.httpOptions);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + 'projects/' + id, this.httpOptions);
  }

  createProject(project: Project): Observable<string> {
    return this.http.post<string>(this.baseUrl + 'projects', project, this.httpOptions);
  }

  updateProject(project: Project): Observable<string> {
    return this.http.post<string>(this.baseUrl + 'projects/' + project.id, project, this.httpOptions);
  }

  deleteProject(id: number): Observable<string> {
    console.log('here', id);
    return this.http.post<string>(this.baseUrl + 'projects/' + id + '/delete', this.httpOptions);
  }
}
