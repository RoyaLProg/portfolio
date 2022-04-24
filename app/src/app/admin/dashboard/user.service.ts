import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../response';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:3000/user';

  changePassword(oldPassword: string, newPassword: string): Observable<Response> {
    return this.http.post<Response>(`${this.baseURL}/change-password`, { oldPassword, newPassword });
  }
  changeUsername(username: string): Observable<Response> {
    return this.http.post<Response>(`${this.baseURL}/change-username`, { username });
  }
}
