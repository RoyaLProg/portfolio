import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './skill';
import { environment } from 'src/environments/environment';
import { Response } from '../admin/response';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.baseURL;
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseURL + 'skills');
  }

  getSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.baseURL + 'skills/' + id);
  }

  addSkill(skill: Skill): Observable<Response> {
    return this.http.post<Response>(this.baseURL + 'skills', skill);
  }

  updateSkill(skill: Skill): Observable<Response> {
    return this.http.post<Response>(this.baseURL + 'skills/' + skill.id, skill);
  }

  deleteSkill(id: number): Observable<Response> {
    return this.http.post<Response>(this.baseURL + 'skills/' + id + '/delete', {});
  }
}
